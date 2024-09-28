import { graphql } from "@/core/utils/generator";

export const mCreateAnswer = graphql(`
  mutation CreateAnswer($createAnswerInput: CreateAnswerInput!) {
    createAnswer(createAnswerInput: $createAnswerInput) {
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

  input CreateAnswerInput {
    assigAuditor: String
    auditorNote: String
    hashtags: String
    id: Int
    questionId: Int!
    questionTitle: String!
    stateLabels: String
    userAnswer: String!
    userEmail: String!
    userId: Int!
  }
`);

export const mCreateAnswers = graphql(`
  mutation CreateAnswers($createManyAnswersInput: CreateManyAnswersInput!) {
    createAnswers(createManyAnswersInput: $createManyAnswersInput) {
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

  input CreateManyAnswersInput {
    createAnswersInput: [CreateAnswerInput!]!
  }
`);
