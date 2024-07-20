import { graphql } from "../../../utils/generator";

/**0) We need to supply the query type + query name at the beginning!*/
//create an interface to return the whole files without having to type each line!!
export const qFindAllAnswers = graphql(/*GraphQL */ `
  query FindAllAnswers {
    findAllAnswers {
      assigAuditor
      auditorNote
      hashtags
      id
      questionId
      questionTitle
      stateLabels
      userId
      userAnswer
      userEmail
    }
  }
`);
export const qFindOneAnswer = graphql(/*GraphQL */ `
  query findOneAnswer($id: Int!) {
    findOneAnswer(id: $id) {
      assigAuditor
      auditorNote
      hashtags
      id
      questionId
      questionTitle
      stateLabels
      userId
      userAnswer
      userEmail
    }
  }
`);
export const qFindManyAnswers = graphql(/*GraphQL */ `
  query findManyAnswers($ids: [Int!]!) {
    findManyAnswers(ids: $ids) {
      assigAuditor
      auditorNote
      hashtags
      id
      questionId
      questionTitle
      stateLabels
      userId
      userAnswer
      userEmail
    }
  }
`);
