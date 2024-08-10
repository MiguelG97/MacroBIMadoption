/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Answer = {
  __typename?: 'Answer';
  assigAuditor?: Maybe<Scalars['String']['output']>;
  auditorNote?: Maybe<Scalars['String']['output']>;
  hashtags?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  questionId: Scalars['Float']['output'];
  questionTitle: Scalars['String']['output'];
  questionnary?: Maybe<Questionnary>;
  stateLabels?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userAnswer?: Maybe<Scalars['String']['output']>;
  userEmail: Scalars['String']['output'];
  userId: Scalars['Float']['output'];
  verifStatus?: Maybe<Scalars['String']['output']>;
};

/** Type of chart to use in the dashboard */
export enum Chart {
  Bar = 'bar',
  Pie = 'pie',
  Table = 'table',
  Undefined = 'undefined'
}

export type CreateAnswerInput = {
  assigAuditor?: InputMaybe<Scalars['String']['input']>;
  auditorNote?: InputMaybe<Scalars['String']['input']>;
  hashtags?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  questionId: Scalars['Float']['input'];
  questionTitle: Scalars['String']['input'];
  stateLabels?: InputMaybe<Scalars['String']['input']>;
  userAnswer?: InputMaybe<Scalars['String']['input']>;
  userEmail: Scalars['String']['input'];
  userId: Scalars['Float']['input'];
  verifStatus?: InputMaybe<Scalars['String']['input']>;
};

export type CreateManyAnswersInput = {
  createAnswersInput: Array<CreateAnswerInput>;
};

export type CreateManyQuestionnariesInput = {
  questionnariesInput: Array<CreateQuestionnaryInput>;
};

export type CreateManyUsersInput = {
  manyUsersInput: Array<CreateUserInput>;
};

export type CreateQuestionnaryInput = {
  campaign?: InputMaybe<Scalars['String']['input']>;
  chartType: Chart;
  choices: Array<Scalars['String']['input']>;
  questionId: Scalars['Float']['input'];
  sectionName?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  academicProgramme?: InputMaybe<Array<Scalars['String']['input']>>;
  country: Scalars['String']['input'];
  userEmail: Scalars['String']['input'];
  userId: Scalars['Float']['input'];
  userLabels?: InputMaybe<Scalars['String']['input']>;
  userName: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnswer?: Maybe<Answer>;
  createAnswers: Array<Answer>;
  createQuestionnaries: Array<Questionnary>;
  createQuestionnary: Questionnary;
  createUser: User;
  createUsers: Array<User>;
  updateUser: User;
};


export type MutationCreateAnswerArgs = {
  createAnswerInput: CreateAnswerInput;
};


export type MutationCreateAnswersArgs = {
  createManyAnswersInput: CreateManyAnswersInput;
};


export type MutationCreateQuestionnariesArgs = {
  createManyQuestionnariesInput: CreateManyQuestionnariesInput;
};


export type MutationCreateQuestionnaryArgs = {
  createQuestionnaryInput: CreateQuestionnaryInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateUsersArgs = {
  createManyUsersInput: CreateManyUsersInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  findAllAnswers: Array<Answer>;
  findAllQuestionnaries: Array<Questionnary>;
  findAllUsers: Array<User>;
  findManyAnswers: Array<Answer>;
  findManyQuestionnaries: Array<Questionnary>;
  findManyUsers: Array<User>;
  findOneAnswer: Answer;
  findOneQuestionnary: Questionnary;
  findOneUser: User;
};


export type QueryFindManyAnswersArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type QueryFindManyQuestionnariesArgs = {
  questionIds: Array<Scalars['Int']['input']>;
};


export type QueryFindManyUsersArgs = {
  userIds: Array<Scalars['Int']['input']>;
};


export type QueryFindOneAnswerArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindOneQuestionnaryArgs = {
  questionId: Scalars['Int']['input'];
};


export type QueryFindOneUserArgs = {
  userId: Scalars['Int']['input'];
};

export type Questionnary = {
  __typename?: 'Questionnary';
  answers: Array<Answer>;
  campaign: Scalars['String']['output'];
  chartType: Chart;
  choices: Array<Scalars['String']['output']>;
  questionId: Scalars['Float']['output'];
  sectionName: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type UpdateUserInput = {
  academicProgramme?: InputMaybe<Array<Scalars['String']['input']>>;
  country?: InputMaybe<Scalars['String']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['Int']['input'];
  userLabels?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  academicProgramme?: Maybe<Array<Scalars['String']['output']>>;
  answers: Array<Answer>;
  country: Scalars['String']['output'];
  userEmail: Scalars['String']['output'];
  userId: Scalars['Float']['output'];
  userLabels?: Maybe<Scalars['String']['output']>;
  userName: Scalars['String']['output'];
};

export type CreateAnswerMutationVariables = Exact<{
  createAnswerInput: CreateAnswerInput;
}>;


export type CreateAnswerMutation = { __typename?: 'Mutation', createAnswer?: { __typename?: 'Answer', assigAuditor?: string | null, auditorNote?: string | null, hashtags?: string | null, id: number, questionId: number, questionTitle: string, stateLabels?: string | null, userId: number, userAnswer?: string | null, userEmail: string } | null };

export type CreateAnswersMutationVariables = Exact<{
  createManyAnswersInput: CreateManyAnswersInput;
}>;


export type CreateAnswersMutation = { __typename?: 'Mutation', createAnswers: Array<{ __typename?: 'Answer', assigAuditor?: string | null, auditorNote?: string | null, hashtags?: string | null, id: number, questionId: number, questionTitle: string, stateLabels?: string | null, userId: number, userAnswer?: string | null, userEmail: string }> };

export type CreateQuestionnaryMutationVariables = Exact<{
  createQuestionnaryInput: CreateQuestionnaryInput;
}>;


export type CreateQuestionnaryMutation = { __typename?: 'Mutation', createQuestionnary: { __typename?: 'Questionnary', campaign: string, chartType: Chart, choices: Array<string>, questionId: number, sectionName: string, title: string } };

export type CreateQuestionnariesMutationVariables = Exact<{
  createManyQuestionnariesInput: CreateManyQuestionnariesInput;
}>;


export type CreateQuestionnariesMutation = { __typename?: 'Mutation', createQuestionnaries: Array<{ __typename?: 'Questionnary', campaign: string, chartType: Chart, choices: Array<string>, questionId: number, sectionName: string, title: string }> };

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', academicProgramme?: Array<string> | null, country: string, userEmail: string, userId: number, userLabels?: string | null, userName: string } };

export type CreateUsersMutationVariables = Exact<{
  createManyUsersInput: CreateManyUsersInput;
}>;


export type CreateUsersMutation = { __typename?: 'Mutation', createUsers: Array<{ __typename?: 'User', academicProgramme?: Array<string> | null, country: string, userEmail: string, userId: number, userLabels?: string | null, userName: string }> };

export type FindAllAnswersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllAnswersQuery = { __typename?: 'Query', findAllAnswers: Array<{ __typename?: 'Answer', assigAuditor?: string | null, auditorNote?: string | null, hashtags?: string | null, id: number, questionId: number, questionTitle: string, stateLabels?: string | null, userId: number, userAnswer?: string | null, userEmail: string }> };

export type FindOneAnswerQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindOneAnswerQuery = { __typename?: 'Query', findOneAnswer: { __typename?: 'Answer', assigAuditor?: string | null, auditorNote?: string | null, hashtags?: string | null, id: number, questionId: number, questionTitle: string, stateLabels?: string | null, userId: number, userAnswer?: string | null, userEmail: string } };

export type FindManyAnswersQueryVariables = Exact<{
  ids: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type FindManyAnswersQuery = { __typename?: 'Query', findManyAnswers: Array<{ __typename?: 'Answer', assigAuditor?: string | null, auditorNote?: string | null, hashtags?: string | null, id: number, questionId: number, questionTitle: string, stateLabels?: string | null, userId: number, userAnswer?: string | null, userEmail: string }> };

export type FindAllQuestionnariesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllQuestionnariesQuery = { __typename?: 'Query', findAllQuestionnaries: Array<{ __typename?: 'Questionnary', campaign: string, chartType: Chart, choices: Array<string>, questionId: number, sectionName: string, title: string }> };

export type FindOneQuestionnaryQueryVariables = Exact<{
  questionId: Scalars['Int']['input'];
}>;


export type FindOneQuestionnaryQuery = { __typename?: 'Query', findOneQuestionnary: { __typename?: 'Questionnary', campaign: string, chartType: Chart, choices: Array<string>, questionId: number, sectionName: string, title: string } };

export type FindManyQuestionnariesQueryVariables = Exact<{
  questionIds: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type FindManyQuestionnariesQuery = { __typename?: 'Query', findManyQuestionnaries: Array<{ __typename?: 'Questionnary', campaign: string, chartType: Chart, choices: Array<string>, questionId: number, sectionName: string, title: string }> };

export type FindAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllUsersQuery = { __typename?: 'Query', findAllUsers: Array<{ __typename?: 'User', academicProgramme?: Array<string> | null, country: string, userEmail: string, userId: number, userLabels?: string | null, userName: string }> };

export type FindOneUserQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type FindOneUserQuery = { __typename?: 'Query', findOneUser: { __typename?: 'User', academicProgramme?: Array<string> | null, country: string, userEmail: string, userId: number, userLabels?: string | null, userName: string } };

export type FindManyUsersQueryVariables = Exact<{
  userIds: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type FindManyUsersQuery = { __typename?: 'Query', findManyUsers: Array<{ __typename?: 'User', academicProgramme?: Array<string> | null, country: string, userEmail: string, userId: number, userLabels?: string | null, userName: string }> };


export const CreateAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createAnswerInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAnswerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAnswer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createAnswerInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createAnswerInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assigAuditor"}},{"kind":"Field","name":{"kind":"Name","value":"auditorNote"}},{"kind":"Field","name":{"kind":"Name","value":"hashtags"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"questionId"}},{"kind":"Field","name":{"kind":"Name","value":"questionTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stateLabels"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userAnswer"}},{"kind":"Field","name":{"kind":"Name","value":"userEmail"}}]}}]}}]} as unknown as DocumentNode<CreateAnswerMutation, CreateAnswerMutationVariables>;
export const CreateAnswersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAnswers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createManyAnswersInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateManyAnswersInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAnswers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createManyAnswersInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createManyAnswersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assigAuditor"}},{"kind":"Field","name":{"kind":"Name","value":"auditorNote"}},{"kind":"Field","name":{"kind":"Name","value":"hashtags"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"questionId"}},{"kind":"Field","name":{"kind":"Name","value":"questionTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stateLabels"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userAnswer"}},{"kind":"Field","name":{"kind":"Name","value":"userEmail"}}]}}]}}]} as unknown as DocumentNode<CreateAnswersMutation, CreateAnswersMutationVariables>;
export const CreateQuestionnaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateQuestionnary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createQuestionnaryInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateQuestionnaryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createQuestionnary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createQuestionnaryInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createQuestionnaryInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaign"}},{"kind":"Field","name":{"kind":"Name","value":"chartType"}},{"kind":"Field","name":{"kind":"Name","value":"choices"}},{"kind":"Field","name":{"kind":"Name","value":"questionId"}},{"kind":"Field","name":{"kind":"Name","value":"sectionName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateQuestionnaryMutation, CreateQuestionnaryMutationVariables>;
export const CreateQuestionnariesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateQuestionnaries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createManyQuestionnariesInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateManyQuestionnariesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createQuestionnaries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createManyQuestionnariesInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createManyQuestionnariesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaign"}},{"kind":"Field","name":{"kind":"Name","value":"chartType"}},{"kind":"Field","name":{"kind":"Name","value":"choices"}},{"kind":"Field","name":{"kind":"Name","value":"questionId"}},{"kind":"Field","name":{"kind":"Name","value":"sectionName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateQuestionnariesMutation, CreateQuestionnariesMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"academicProgramme"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"userEmail"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userLabels"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const CreateUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createManyUsersInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateManyUsersInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createManyUsersInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createManyUsersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"academicProgramme"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"userEmail"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userLabels"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}}]}}]}}]} as unknown as DocumentNode<CreateUsersMutation, CreateUsersMutationVariables>;
export const FindAllAnswersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllAnswers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllAnswers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assigAuditor"}},{"kind":"Field","name":{"kind":"Name","value":"auditorNote"}},{"kind":"Field","name":{"kind":"Name","value":"hashtags"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"questionId"}},{"kind":"Field","name":{"kind":"Name","value":"questionTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stateLabels"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userAnswer"}},{"kind":"Field","name":{"kind":"Name","value":"userEmail"}}]}}]}}]} as unknown as DocumentNode<FindAllAnswersQuery, FindAllAnswersQueryVariables>;
export const FindOneAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findOneAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findOneAnswer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assigAuditor"}},{"kind":"Field","name":{"kind":"Name","value":"auditorNote"}},{"kind":"Field","name":{"kind":"Name","value":"hashtags"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"questionId"}},{"kind":"Field","name":{"kind":"Name","value":"questionTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stateLabels"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userAnswer"}},{"kind":"Field","name":{"kind":"Name","value":"userEmail"}}]}}]}}]} as unknown as DocumentNode<FindOneAnswerQuery, FindOneAnswerQueryVariables>;
export const FindManyAnswersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findManyAnswers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findManyAnswers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assigAuditor"}},{"kind":"Field","name":{"kind":"Name","value":"auditorNote"}},{"kind":"Field","name":{"kind":"Name","value":"hashtags"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"questionId"}},{"kind":"Field","name":{"kind":"Name","value":"questionTitle"}},{"kind":"Field","name":{"kind":"Name","value":"stateLabels"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userAnswer"}},{"kind":"Field","name":{"kind":"Name","value":"userEmail"}}]}}]}}]} as unknown as DocumentNode<FindManyAnswersQuery, FindManyAnswersQueryVariables>;
export const FindAllQuestionnariesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllQuestionnaries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllQuestionnaries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaign"}},{"kind":"Field","name":{"kind":"Name","value":"chartType"}},{"kind":"Field","name":{"kind":"Name","value":"choices"}},{"kind":"Field","name":{"kind":"Name","value":"questionId"}},{"kind":"Field","name":{"kind":"Name","value":"sectionName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<FindAllQuestionnariesQuery, FindAllQuestionnariesQueryVariables>;
export const FindOneQuestionnaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindOneQuestionnary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findOneQuestionnary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"questionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaign"}},{"kind":"Field","name":{"kind":"Name","value":"chartType"}},{"kind":"Field","name":{"kind":"Name","value":"choices"}},{"kind":"Field","name":{"kind":"Name","value":"questionId"}},{"kind":"Field","name":{"kind":"Name","value":"sectionName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<FindOneQuestionnaryQuery, FindOneQuestionnaryQueryVariables>;
export const FindManyQuestionnariesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindManyQuestionnaries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findManyQuestionnaries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"questionIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaign"}},{"kind":"Field","name":{"kind":"Name","value":"chartType"}},{"kind":"Field","name":{"kind":"Name","value":"choices"}},{"kind":"Field","name":{"kind":"Name","value":"questionId"}},{"kind":"Field","name":{"kind":"Name","value":"sectionName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<FindManyQuestionnariesQuery, FindManyQuestionnariesQueryVariables>;
export const FindAllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"academicProgramme"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"userEmail"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userLabels"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}}]}}]}}]} as unknown as DocumentNode<FindAllUsersQuery, FindAllUsersQueryVariables>;
export const FindOneUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindOneUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findOneUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"academicProgramme"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"userEmail"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userLabels"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}}]}}]}}]} as unknown as DocumentNode<FindOneUserQuery, FindOneUserQueryVariables>;
export const FindManyUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindManyUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findManyUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"academicProgramme"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"userEmail"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userLabels"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}}]}}]}}]} as unknown as DocumentNode<FindManyUsersQuery, FindManyUsersQueryVariables>;