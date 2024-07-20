import { graphql } from "@/core/utils/generator";

export const mCreateQuestionnary = graphql(`
  mutation CreateQuestionnary(
    $createQuestionnaryInput: CreateQuestionnaryInput!
  ) {
    createQuestionnary(createQuestionnaryInput: $createQuestionnaryInput) {
      campaign
      chartType
      choices
      questionId
      sectionName
      title
    }
  }

  input CreateQuestionnaryInput {
    campaign: String
    chartType: Chart!
    choices: [String!]!
    questionId: Int!
    sectionName: String
    title: String!
  }
`);

export const mCreateQuestionnaries = graphql(`
  mutation CreateQuestionnaries(
    $createManyQuestionnariesInput: CreateManyQuestionnariesInput!
  ) {
    createQuestionnaries(
      createManyQuestionnariesInput: $createManyQuestionnariesInput
    ) {
      campaign
      chartType
      choices
      questionId
      sectionName
      title
    }
  }

  input CreateManyQuestionnariesInput {
    questionnariesInput: [CreateQuestionnaryInput!]!
  }
`);
