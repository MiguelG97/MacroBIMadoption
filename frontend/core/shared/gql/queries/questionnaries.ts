import { graphql } from "@/core/utils/generator";

export const qFindAllQuestionnaries = graphql(`
  query FindAllQuestionnaries {
    findAllQuestionnaries {
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
    findOneQuestionnary(questionId: $questionId) {
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
    findManyQuestionnaries(questionIds: $questionIds) {
      campaign
      chartType
      choices
      questionId
      sectionName
      title
    }
  }
`);
