import {
  IAnswer,
  IQuestionnaire,
} from "@/core/shared/types/postgresql_schema_types";

export interface IChoiceCounter {
  [index: number]: {
    choice: string;
    count: number;
  };
}
export class ProcessDataModel {
  private static _singleton = new ProcessDataModel();
  private constructor() {}
  public static get _shared() {
    return ProcessDataModel._singleton;
  }

  /**
   *
   * @param unfoldOtherChoices
   * useful for tables
   * @returns
   */
  public countChoices({
    answers,
    questionnaire,
    unfoldOtherChoices = false,
  }: {
    answers: IAnswer[];
    questionnaire: IQuestionnaire;
    unfoldOtherChoices?: boolean;
  }) {
    //1) set choice name and 0 as initial counter for each choice
    const choiceCounter: IChoiceCounter = {};
    const otherChoices: string[] = [];

    for (const index in questionnaire.choices) {
      const choice = questionnaire.choices[index];
      choiceCounter[index] = {
        choice,
        count: 0,
      };
    }

    //2) count all the answers
    for (const answer of answers) {
      //2.1) Filtering blank spaces
      const userInput: string | undefined = answer.userAnswer;
      if (!userInput || userInput === "") continue;

      //2.2) check if userInput is a multiple choice answer
      let userInputs: string[] = [];
      if (userInput.includes("|")) {
        userInputs = userInput.split("|");
      } else {
        userInputs.push(userInput);
      }

      //2.3)Count the inputs
      const choiceCounterValues = Object.values(choiceCounter) as [
        {
          choice: string;
          count: number;
        }
      ];

      for (const userInput of userInputs) {
        let choiceFound = choiceCounterValues.find(
          (x) => userInput.includes(x.choice) || x.choice.includes(userInput)
        );
        if (choiceFound) {
          choiceFound!.count += 1; //since we have gotten a reference, by updating this value, choiceCounter Objects gets updated
        } else {
          //userInput is a other choice
          if (!otherChoices.includes(userInput)) otherChoices.push(userInput);
        }
      }
    }

    //3) add the other choices to the choiceCounter
    //3.1) if its count is greater than 0 & it's not required to be unfolded
    if (otherChoices.length > 0 && !unfoldOtherChoices) {
      //assuming the others is always at the end of the list
      choiceCounter[Object.keys(choiceCounter).length] = {
        choice: "Others",
        count: otherChoices.length,
      };
    }
    //3.2) unfolding otheranswers
    else if (otherChoices.length > 0 && unfoldOtherChoices) {
      for (let index = 0; index < otherChoices.length; index++) {
        const otherChoice = otherChoices[index];
        const choiceCounterValues: {
          choice: string;
          count: number;
        }[] = Object.values(choiceCounter);

        const otherChoiceExist_Index = choiceCounterValues.findIndex(
          (a) => a.choice === otherChoice
        );
        if (otherChoiceExist_Index > 0) {
          choiceCounter[otherChoiceExist_Index].count += 1;
        } else {
          choiceCounter[Object.keys(choiceCounter).length] = {
            choice: otherChoice,
            count: 1,
          };
        }
      }
    }

    return choiceCounter;
  }
}
