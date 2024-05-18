import { graphql } from "@/core/utils/generator";

export const createsManyAnswer = graphql(`
  input CreateAnswerInput {
    Answers: [AnswerInput!]!
  }

  input AnswerInput {
    Assessment: String!
    Campaign: String!
    Item_ID: String!
    Item_Title: String!
    Item_Type: String!
    Statement_Labels: String!
    User_Email: String!
    User_ID: String!
    User_Name: String!
    Verification_Status: String!
  }

  mutation CreatesManyAnswer(
    $createAnswerInput: CreateAnswerInput!
  ) {
    createsManyAnswer(
      createAnswerInput: $createAnswerInput
    ) {
      Assessment
    }
  }
`);
