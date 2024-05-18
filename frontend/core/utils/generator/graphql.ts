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
  Assessment?: Maybe<Scalars['String']['output']>;
  Campaign?: Maybe<Scalars['String']['output']>;
  Item_ID?: Maybe<Scalars['String']['output']>;
  Item_Title?: Maybe<Scalars['String']['output']>;
  Item_Type?: Maybe<Scalars['String']['output']>;
  Statement_Labels?: Maybe<Scalars['String']['output']>;
  User_Email?: Maybe<Scalars['String']['output']>;
  User_ID?: Maybe<Scalars['String']['output']>;
  User_Name?: Maybe<Scalars['String']['output']>;
  Verification_Status?: Maybe<Scalars['String']['output']>;
};

export type AnswerInput = {
  Assessment?: InputMaybe<Scalars['String']['input']>;
  Campaign?: InputMaybe<Scalars['String']['input']>;
  Item_ID?: InputMaybe<Scalars['String']['input']>;
  Item_Title?: InputMaybe<Scalars['String']['input']>;
  Item_Type?: InputMaybe<Scalars['String']['input']>;
  Statement_Labels?: InputMaybe<Scalars['String']['input']>;
  User_Email?: InputMaybe<Scalars['String']['input']>;
  User_ID?: InputMaybe<Scalars['String']['input']>;
  User_Name?: InputMaybe<Scalars['String']['input']>;
  Verification_Status?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAnswerInput = {
  Answers: Array<AnswerInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createsManyAnswer: Answer;
  createsSingleAnswer?: Maybe<Answer>;
};


export type MutationCreatesManyAnswerArgs = {
  createAnswerInput: CreateAnswerInput;
};


export type MutationCreatesSingleAnswerArgs = {
  createAnswerInput: CreateAnswerInput;
};

export type Query = {
  __typename?: 'Query';
  answers: Array<Answer>;
};

export type CreatesManyAnswerMutationVariables = Exact<{
  createAnswerInput: CreateAnswerInput;
}>;


export type CreatesManyAnswerMutation = { __typename?: 'Mutation', createsManyAnswer: { __typename?: 'Answer', Assessment?: string | null } };


export const CreatesManyAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatesManyAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createAnswerInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAnswerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createsManyAnswer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createAnswerInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createAnswerInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Assessment"}}]}}]}}]} as unknown as DocumentNode<CreatesManyAnswerMutation, CreatesManyAnswerMutationVariables>;