import { store } from "@/core/shared/redux/store";
import { ISectionItem } from "@/core/shared/types/section_Questionnarie";
interface countAnswer {
  [index: number]: {
    answerName: string;
    count: number;
  };
}
export class ProcessDataUtils {
  static processData(
    sectionID: string,
    section: ISectionItem[]
  ): countAnswer | null {
    const questionnarieAnsw =
      store.getState().questionnarieSlice;

    //1) filter the relevant answers related to an specific section and question
    const answers =
      questionnarieAnsw.value.filter(
        (x) => x["Item ID"] === sectionID
      );
    //2) find the original question data to be used as reference
    const answer1 = section.find(
      (x) =>
        x.question_id.toString() === sectionID
    );
    if (!answer1) return null;

    //3) Prepare the count values object for each possible answer to the question
    const answerCounter: countAnswer = {};
    for (const index in answer1.answers) {
      const answ = answer1.answers[index];
      answerCounter[index] = {
        answerName: answ,
        count: 0,
      };
    }
    let otherCounter = 0;
    const otherValues: string[] = [];

    //4) accumulate all the values been answered in the survey

    for (const answer of answers) {
      //4.1) Filtering blank spaces
      //strange, for some of them the User Input column does not exist!!
      //=> this means that it left a blank space! so do not take it into account
      const userInput: string =
        answer["User Input"];
      if (!userInput || userInput === "")
        continue;

      //4.2) check if userinput is a multi choice answer
      let choices: string[] = [];
      if (userInput.includes("|")) {
        choices = userInput.split("|");
      } else {
        choices.push(userInput);
      }

      //4.3)Count the answers
      const values = Object.values(
        answerCounter
      ) as [
        {
          answerName: string;
          count: number;
        }
      ];
      for (const choice of choices) {
        let answFound = values.find(
          (x) =>
            choice.includes(x.answerName) ||
            x.answerName.includes(choice)
        );
        if (answFound) {
          answFound!.count += 1;
        } else {
          //it's a custom (other) answer
          if (!otherValues.includes(choice))
            otherValues.push(choice);
          otherCounter++;

          console.log(
            answFound,
            userInput,
            answer
          );
        }
      }
    }
    //add the other answers to the object group if its count is greater than 0
    if (otherCounter > 0) {
      answerCounter[
        Object.keys(answerCounter).length
      ] = {
        answerName: "Others",
        count: otherCounter,
      };
    }

    return answerCounter;
  }
}
