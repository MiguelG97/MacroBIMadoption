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
    let choiceCounter: IChoiceCounter = {};
    const otherChoices: string[] = [];

    choiceCounter = questionnaire.choices.reduce((prev, curr, index) => {
      prev[index] = { choice: curr, count: 0 };
      return prev;
    }, choiceCounter);

    //2) count all the answers
    for (const answer of answers) {
      //2.1) FILTERING BLANK SPACES!! [SKIP]
      const userInput: string | undefined = answer.userAnswer;
      if (!userInput || userInput === "") continue;

      //2.2) check if userInput is a multiple choice answer
      let userInputs: string[] = [];
      if (userInput.includes("|")) {
        userInputs = userInput.split("|");
      } else {
        userInputs.push(userInput);
      }
      userInputs = userInputs.map((i) => i.trim());

      //2.3)Count the inputs
      const choiceCounterValues = Object.values(choiceCounter) as [
        {
          choice: string;
          count: number;
        }
      ];

      for (const userInput of userInputs) {
        //it had to be exactly the same answer, [at least use lower case match, we have issues in some questionnaire choices section, some letters should've been in upper case]
        // otherwise if an answers is contained in a choice, it will be counted in the wrong group
        let choiceFound = choiceCounterValues.find(
          (x) => userInput.toLowerCase() === x.choice.toLowerCase()
        );
        if (choiceFound) {
          choiceFound!.count += 1; //since we have gotten a reference, by updating this value, choiceCounter Objects gets updated
        } else {
          //userInput is an other choice
          otherChoices.push(userInput);
        }
      }
    }

    //3) add the other choices to the choiceCounter
    //3.1) if its count is greater than 0 & it's not required to be unfolded
    if (otherChoices.length > 0 && !unfoldOtherChoices) {
      //questionIds that require Others to be named as None, how about Simulating and Quantifying??
      const qNoneIds: number[] = [1665080678817, 1665080678815, 1665080678819];

      //assuming the others is always at the end of the list
      choiceCounter[Object.keys(choiceCounter).length] = {
        choice: qNoneIds.includes(questionnaire.questionId) ? "None" : "Others",
        count: otherChoices.length,
      };
    }
    //3.2) unfolding otheranswers
    else if (otherChoices.length > 0 && unfoldOtherChoices) {
      const uniqueOtherChoices = [...new Set(otherChoices)];

      for (let index = 0; index < uniqueOtherChoices.length; index++) {
        const uniqueOtherChoice = uniqueOtherChoices[index];

        const count = otherChoices.filter(
          (o) => o === uniqueOtherChoice
        ).length;
        choiceCounter[Object.keys(choiceCounter).length] = {
          choice: uniqueOtherChoice,
          count,
        };
      }
    }

    return choiceCounter;
  }
}
