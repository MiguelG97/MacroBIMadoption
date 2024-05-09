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
    // sectionID: string,
    sectionX: ISectionItem
  ): countAnswer | null {
    //variables
    const questionnarieAnsw =
      store.getState().questionnarieSlice;
    let otherCounter = 0;
    const otherValues: string[] = [];

    //1) filter the relevant answers related to an specific section and question
    const answers =
      questionnarieAnsw.value.filter(
        (x) =>
          x["Item ID"] ===
          sectionX.question_id.toString()
      );
    //2) find the original question data to be used as reference
    //this is actually the sectionX!!

    //3) Prepare the count values object for each possible answer to the question
    const answerCounter: countAnswer = {};
    for (const index in sectionX.answers) {
      const answ = sectionX.answers[index];
      answerCounter[index] = {
        answerName: answ,
        count: 0,
      };
    }

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
