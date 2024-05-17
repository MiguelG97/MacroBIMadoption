/* eslint-disable */
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
  Campaign: Scalars['String']['output'];
  Item_ID: Scalars['String']['output'];
  Item_Title: Scalars['String']['output'];
  Item_Type: Scalars['String']['output'];
  Statement_Labels: Scalars['String']['output'];
  User_Email: Scalars['String']['output'];
  User_ID: Scalars['String']['output'];
  User_Name: Scalars['String']['output'];
  Verification_Status: Scalars['String']['output'];
};

export type AnswerInput = {
  Assessment: Scalars['String']['input'];
  Campaign: Scalars['String']['input'];
  Item_ID: Scalars['String']['input'];
  Item_Title: Scalars['String']['input'];
  Item_Type: Scalars['String']['input'];
  Statement_Labels: Scalars['String']['input'];
  User_Email: Scalars['String']['input'];
  User_ID: Scalars['String']['input'];
  User_Name: Scalars['String']['input'];
  Verification_Status: Scalars['String']['input'];
};

export type CreateAnswerInput = {
  Answers: Array<AnswerInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createsManyAnswer: Answer;
  createsSingleAnswer?: Maybe<Answer>;
  removeAnswer: Answer;
  updateAnswer: Answer;
};


export type MutationCreatesManyAnswerArgs = {
  createAnswerInput: CreateAnswerInput;
};


export type MutationCreatesSingleAnswerArgs = {
  createAnswerInput: CreateAnswerInput;
};


export type MutationRemoveAnswerArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateAnswerArgs = {
  updateAnswerInput: UpdateAnswerInput;
};

export type Query = {
  __typename?: 'Query';
  answer: Answer;
  answers: Array<Answer>;
};


export type QueryAnswerArgs = {
  id: Scalars['Int']['input'];
};

export type UpdateAnswerInput = {
  Answers?: InputMaybe<Array<AnswerInput>>;
  id: Scalars['Int']['input'];
};
