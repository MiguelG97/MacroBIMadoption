import { graphql } from "@/core/utils/generator";

export const qFindAllQuestionnaries = graphql(`
  query FindAllQuestionnaries {
    findAllQuestionnaires {
      campaign
      chartType
      choices
      questionId
      sectionName
      title
    }
  }
`);
export const qFindOneQuestionnary = graphql(`
  query FindOneQuestionnary($questionId: Int!) {
    findOneQuestionnaire(questionId: $questionId) {
      campaign
      chartType
      choices
      questionId
      sectionName
      title
    }
  }
`);

export const qFindManyQuestionnaries = graphql(`
  query FindManyQuestionnaries($questionIds: [Int!]!) {
    findManyQuestionnaires(questionIds: $questionIds) {
      campaign
      chartType
      choices
      questionId
      sectionName
      title
    }
  }
`);
