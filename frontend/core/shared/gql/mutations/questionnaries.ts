import { graphql } from "@/core/utils/generator";

export const mCreateQuestionnary = graphql(`
  mutation CreateQuestionnary(
    $createQuestionnaireInput: CreateQuestionnaireInput!
  ) {
    createQuestionnaire(createQuestionnaireInput: $createQuestionnaireInput) {
      campaign
      chartType
      choices
      questionId
      sectionName
      title
    }
  }

  input CreateQuestionnaireInput {
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
    $createManyQuestionnairesInput: CreateManyQuestionnairesInput!
  ) {
    createQuestionnaires(
      createManyQuestionnairesInput: $createManyQuestionnairesInput
    ) {
      campaign
      chartType
      choices
      questionId
      sectionName
      title
    }
  }

  input CreateManyQuestionnairesInput {
    questionnairesInput: [CreateQuestionnaireInput!]!
  }
`);
