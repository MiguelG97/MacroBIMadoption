/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateAnswer($createAnswerInput: CreateAnswerInput!) {\n    createAnswer(createAnswerInput: $createAnswerInput) {\n      assigAuditor\n      auditorNote\n      hashtags\n      id\n      questionId\n      questionTitle\n      stateLabels\n      userId\n      userAnswer\n      userEmail\n    }\n  }\n\n  input CreateAnswerInput {\n    assigAuditor: String\n    auditorNote: String\n    hashtags: String\n    id: Int\n    questionId: Int!\n    questionTitle: String!\n    stateLabels: String\n    userAnswer: String!\n    userEmail: String!\n    userId: Int!\n  }\n": types.CreateAnswerDocument,
    "\n  mutation CreateAnswers($createManyAnswersInput: CreateManyAnswersInput!) {\n    createAnswers(createManyAnswersInput: $createManyAnswersInput) {\n      assigAuditor\n      auditorNote\n      hashtags\n      id\n      questionId\n      questionTitle\n      stateLabels\n      userId\n      userAnswer\n      userEmail\n    }\n  }\n\n  input CreateManyAnswersInput {\n    createAnswersInput: [CreateAnswerInput!]!\n  }\n": types.CreateAnswersDocument,
    "\n  mutation CreateQuestionnary(\n    $createQuestionnaireInput: CreateQuestionnaireInput!\n  ) {\n    createQuestionnaire(createQuestionnaireInput: $createQuestionnaireInput) {\n      campaign\n      chartType\n      choices\n      questionId\n      sectionName\n      title\n    }\n  }\n\n  input CreateQuestionnaireInput {\n    campaign: String\n    chartType: Chart!\n    choices: [String!]!\n    questionId: Int!\n    sectionName: String\n    title: String!\n  }\n": types.CreateQuestionnaryDocument,
    "\n  mutation CreateQuestionnaries(\n    $createManyQuestionnairesInput: CreateManyQuestionnairesInput!\n  ) {\n    createQuestionnaires(\n      createManyQuestionnairesInput: $createManyQuestionnairesInput\n    ) {\n      campaign\n      chartType\n      choices\n      questionId\n      sectionName\n      title\n    }\n  }\n\n  input CreateManyQuestionnairesInput {\n    questionnairesInput: [CreateQuestionnaireInput!]!\n  }\n": types.CreateQuestionnariesDocument,
    "\n  mutation CreateUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n\n  input CreateUserInput {\n    academicProgramme: [String!]\n    country: String!\n    userEmail: String!\n    userId: Int!\n    userLabels: String!\n    userName: String!\n  }\n": types.CreateUserDocument,
    "\n  mutation CreateUsers($createManyUsersInput: CreateManyUsersInput!) {\n    createUsers(createManyUsersInput: $createManyUsersInput) {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n\n  input CreateManyUsersInput {\n    manyUsersInput: [CreateUserInput!]!\n  }\n": types.CreateUsersDocument,
    "\n  mutation UpdateManyUsers($updateManyUserInput: UpdateManyUserInput!) {\n    updateManyUsers(updateManyUserInput: $updateManyUserInput) {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n\n  input UpdateManyUserInput {\n    userInputs: [UpdateUserInput!]!\n  }\n  input UpdateUserInput {\n    academicProgramme: [String!]\n    country: String\n    userEmail: String\n    userId: Float!\n    userLabels: String\n    userName: String\n  }\n": types.UpdateManyUsersDocument,
    "\n  query FindAllAnswers {\n    findAllAnswers {\n      assigAuditor\n      auditorNote\n      hashtags\n      id\n      questionId\n      questionTitle\n      stateLabels\n      userId\n      userAnswer\n      userEmail\n    }\n  }\n": types.FindAllAnswersDocument,
    "\n  query findOneAnswer($id: Int!) {\n    findOneAnswer(id: $id) {\n      assigAuditor\n      auditorNote\n      hashtags\n      id\n      questionId\n      questionTitle\n      stateLabels\n      userId\n      userAnswer\n      userEmail\n    }\n  }\n": types.FindOneAnswerDocument,
    "\n  query findManyAnswers($ids: [Int!]!) {\n    findManyAnswers(ids: $ids) {\n      assigAuditor\n      auditorNote\n      hashtags\n      id\n      questionId\n      questionTitle\n      stateLabels\n      userId\n      userAnswer\n      userEmail\n    }\n  }\n": types.FindManyAnswersDocument,
    "\n  query FindAllQuestionnaries {\n    findAllQuestionnaires {\n      campaign\n      chartType\n      choices\n      questionId\n      sectionName\n      title\n    }\n  }\n": types.FindAllQuestionnariesDocument,
    "\n  query FindOneQuestionnary($questionId: Int!) {\n    findOneQuestionnaire(questionId: $questionId) {\n      campaign\n      chartType\n      choices\n      questionId\n      sectionName\n      title\n    }\n  }\n": types.FindOneQuestionnaryDocument,
    "\n  query FindManyQuestionnaries($questionIds: [Int!]!) {\n    findManyQuestionnaires(questionIds: $questionIds) {\n      campaign\n      chartType\n      choices\n      questionId\n      sectionName\n      title\n    }\n  }\n": types.FindManyQuestionnariesDocument,
    "\n  query FindAllUsers {\n    findAllUsers {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n": types.FindAllUsersDocument,
    "\n  query FindOneUser($userId: Int!) {\n    findOneUser(userId: $userId) {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n": types.FindOneUserDocument,
    "\n  query FindManyUsers($userIds: [Int!]!) {\n    findManyUsers(userIds: $userIds) {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n": types.FindManyUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateAnswer($createAnswerInput: CreateAnswerInput!) {\n    createAnswer(createAnswerInput: $createAnswerInput) {\n      assigAuditor\n      auditorNote\n      hashtags\n      id\n      questionId\n      questionTitle\n      stateLabels\n      userId\n      userAnswer\n      userEmail\n    }\n  }\n\n  input CreateAnswerInput {\n    assigAuditor: String\n    auditorNote: String\n    hashtags: String\n    id: Int\n    questionId: Int!\n    questionTitle: String!\n    stateLabels: String\n    userAnswer: String!\n    userEmail: String!\n    userId: Int!\n  }\n"): (typeof documents)["\n  mutation CreateAnswer($createAnswerInput: CreateAnswerInput!) {\n    createAnswer(createAnswerInput: $createAnswerInput) {\n      assigAuditor\n      auditorNote\n      hashtags\n      id\n      questionId\n      questionTitle\n      stateLabels\n      userId\n      userAnswer\n      userEmail\n    }\n  }\n\n  input CreateAnswerInput {\n    assigAuditor: String\n    auditorNote: String\n    hashtags: String\n    id: Int\n    questionId: Int!\n    questionTitle: String!\n    stateLabels: String\n    userAnswer: String!\n    userEmail: String!\n    userId: Int!\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateAnswers($createManyAnswersInput: CreateManyAnswersInput!) {\n    createAnswers(createManyAnswersInput: $createManyAnswersInput) {\n      assigAuditor\n      auditorNote\n      hashtags\n      id\n      questionId\n      questionTitle\n      stateLabels\n      userId\n      userAnswer\n      userEmail\n    }\n  }\n\n  input CreateManyAnswersInput {\n    createAnswersInput: [CreateAnswerInput!]!\n  }\n"): (typeof documents)["\n  mutation CreateAnswers($createManyAnswersInput: CreateManyAnswersInput!) {\n    createAnswers(createManyAnswersInput: $createManyAnswersInput) {\n      assigAuditor\n      auditorNote\n      hashtags\n      id\n      questionId\n      questionTitle\n      stateLabels\n      userId\n      userAnswer\n      userEmail\n    }\n  }\n\n  input CreateManyAnswersInput {\n    createAnswersInput: [CreateAnswerInput!]!\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateQuestionnary(\n    $createQuestionnaireInput: CreateQuestionnaireInput!\n  ) {\n    createQuestionnaire(createQuestionnaireInput: $createQuestionnaireInput) {\n      campaign\n      chartType\n      choices\n      questionId\n      sectionName\n      title\n    }\n  }\n\n  input CreateQuestionnaireInput {\n    campaign: String\n    chartType: Chart!\n    choices: [String!]!\n    questionId: Int!\n    sectionName: String\n    title: String!\n  }\n"): (typeof documents)["\n  mutation CreateQuestionnary(\n    $createQuestionnaireInput: CreateQuestionnaireInput!\n  ) {\n    createQuestionnaire(createQuestionnaireInput: $createQuestionnaireInput) {\n      campaign\n      chartType\n      choices\n      questionId\n      sectionName\n      title\n    }\n  }\n\n  input CreateQuestionnaireInput {\n    campaign: String\n    chartType: Chart!\n    choices: [String!]!\n    questionId: Int!\n    sectionName: String\n    title: String!\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateQuestionnaries(\n    $createManyQuestionnairesInput: CreateManyQuestionnairesInput!\n  ) {\n    createQuestionnaires(\n      createManyQuestionnairesInput: $createManyQuestionnairesInput\n    ) {\n      campaign\n      chartType\n      choices\n      questionId\n      sectionName\n      title\n    }\n  }\n\n  input CreateManyQuestionnairesInput {\n    questionnairesInput: [CreateQuestionnaireInput!]!\n  }\n"): (typeof documents)["\n  mutation CreateQuestionnaries(\n    $createManyQuestionnairesInput: CreateManyQuestionnairesInput!\n  ) {\n    createQuestionnaires(\n      createManyQuestionnairesInput: $createManyQuestionnairesInput\n    ) {\n      campaign\n      chartType\n      choices\n      questionId\n      sectionName\n      title\n    }\n  }\n\n  input CreateManyQuestionnairesInput {\n    questionnairesInput: [CreateQuestionnaireInput!]!\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n\n  input CreateUserInput {\n    academicProgramme: [String!]\n    country: String!\n    userEmail: String!\n    userId: Int!\n    userLabels: String!\n    userName: String!\n  }\n"): (typeof documents)["\n  mutation CreateUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n\n  input CreateUserInput {\n    academicProgramme: [String!]\n    country: String!\n    userEmail: String!\n    userId: Int!\n    userLabels: String!\n    userName: String!\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUsers($createManyUsersInput: CreateManyUsersInput!) {\n    createUsers(createManyUsersInput: $createManyUsersInput) {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n\n  input CreateManyUsersInput {\n    manyUsersInput: [CreateUserInput!]!\n  }\n"): (typeof documents)["\n  mutation CreateUsers($createManyUsersInput: CreateManyUsersInput!) {\n    createUsers(createManyUsersInput: $createManyUsersInput) {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n\n  input CreateManyUsersInput {\n    manyUsersInput: [CreateUserInput!]!\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateManyUsers($updateManyUserInput: UpdateManyUserInput!) {\n    updateManyUsers(updateManyUserInput: $updateManyUserInput) {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n\n  input UpdateManyUserInput {\n    userInputs: [UpdateUserInput!]!\n  }\n  input UpdateUserInput {\n    academicProgramme: [String!]\n    country: String\n    userEmail: String\n    userId: Float!\n    userLabels: String\n    userName: String\n  }\n"): (typeof documents)["\n  mutation UpdateManyUsers($updateManyUserInput: UpdateManyUserInput!) {\n    updateManyUsers(updateManyUserInput: $updateManyUserInput) {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n\n  input UpdateManyUserInput {\n    userInputs: [UpdateUserInput!]!\n  }\n  input UpdateUserInput {\n    academicProgramme: [String!]\n    country: String\n    userEmail: String\n    userId: Float!\n    userLabels: String\n    userName: String\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FindAllAnswers {\n    findAllAnswers {\n      assigAuditor\n      auditorNote\n      hashtags\n      id\n      questionId\n      questionTitle\n      stateLabels\n      userId\n      userAnswer\n      userEmail\n    }\n  }\n"): (typeof documents)["\n  query FindAllAnswers {\n    findAllAnswers {\n      assigAuditor\n      auditorNote\n      hashtags\n      id\n      questionId\n      questionTitle\n      stateLabels\n      userId\n      userAnswer\n      userEmail\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query findOneAnswer($id: Int!) {\n    findOneAnswer(id: $id) {\n      assigAuditor\n      auditorNote\n      hashtags\n      id\n      questionId\n      questionTitle\n      stateLabels\n      userId\n      userAnswer\n      userEmail\n    }\n  }\n"): (typeof documents)["\n  query findOneAnswer($id: Int!) {\n    findOneAnswer(id: $id) {\n      assigAuditor\n      auditorNote\n      hashtags\n      id\n      questionId\n      questionTitle\n      stateLabels\n      userId\n      userAnswer\n      userEmail\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query findManyAnswers($ids: [Int!]!) {\n    findManyAnswers(ids: $ids) {\n      assigAuditor\n      auditorNote\n      hashtags\n      id\n      questionId\n      questionTitle\n      stateLabels\n      userId\n      userAnswer\n      userEmail\n    }\n  }\n"): (typeof documents)["\n  query findManyAnswers($ids: [Int!]!) {\n    findManyAnswers(ids: $ids) {\n      assigAuditor\n      auditorNote\n      hashtags\n      id\n      questionId\n      questionTitle\n      stateLabels\n      userId\n      userAnswer\n      userEmail\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FindAllQuestionnaries {\n    findAllQuestionnaires {\n      campaign\n      chartType\n      choices\n      questionId\n      sectionName\n      title\n    }\n  }\n"): (typeof documents)["\n  query FindAllQuestionnaries {\n    findAllQuestionnaires {\n      campaign\n      chartType\n      choices\n      questionId\n      sectionName\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FindOneQuestionnary($questionId: Int!) {\n    findOneQuestionnaire(questionId: $questionId) {\n      campaign\n      chartType\n      choices\n      questionId\n      sectionName\n      title\n    }\n  }\n"): (typeof documents)["\n  query FindOneQuestionnary($questionId: Int!) {\n    findOneQuestionnaire(questionId: $questionId) {\n      campaign\n      chartType\n      choices\n      questionId\n      sectionName\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FindManyQuestionnaries($questionIds: [Int!]!) {\n    findManyQuestionnaires(questionIds: $questionIds) {\n      campaign\n      chartType\n      choices\n      questionId\n      sectionName\n      title\n    }\n  }\n"): (typeof documents)["\n  query FindManyQuestionnaries($questionIds: [Int!]!) {\n    findManyQuestionnaires(questionIds: $questionIds) {\n      campaign\n      chartType\n      choices\n      questionId\n      sectionName\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FindAllUsers {\n    findAllUsers {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n"): (typeof documents)["\n  query FindAllUsers {\n    findAllUsers {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FindOneUser($userId: Int!) {\n    findOneUser(userId: $userId) {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n"): (typeof documents)["\n  query FindOneUser($userId: Int!) {\n    findOneUser(userId: $userId) {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FindManyUsers($userIds: [Int!]!) {\n    findManyUsers(userIds: $userIds) {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n"): (typeof documents)["\n  query FindManyUsers($userIds: [Int!]!) {\n    findManyUsers(userIds: $userIds) {\n      academicProgramme\n      country\n      userEmail\n      userId\n      userLabels\n      userName\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;