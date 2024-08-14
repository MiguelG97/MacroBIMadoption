import { graphql } from "@/core/utils/generator";

export const mCreateUser = graphql(`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      academicProgramme
      country
      userEmail
      userId
      userLabels
      userName
    }
  }

  input CreateUserInput {
    academicProgramme: [String!]
    country: String!
    userEmail: String!
    userId: Int!
    userLabels: String!
    userName: String!
  }
`);

export const mCreateUsers = graphql(`
  mutation CreateUsers($createManyUsersInput: CreateManyUsersInput!) {
    createUsers(createManyUsersInput: $createManyUsersInput) {
      academicProgramme
      country
      userEmail
      userId
      userLabels
      userName
    }
  }

  input CreateManyUsersInput {
    manyUsersInput: [CreateUserInput!]!
  }
`);

export const mUpdateUsers = graphql(`
  mutation UpdateManyUsers($updateManyUserInput: UpdateManyUserInput!) {
    updateManyUsers(updateManyUserInput: $updateManyUserInput) {
      academicProgramme
      country
      userEmail
      userId
      userLabels
      userName
    }
  }

  input UpdateManyUserInput {
    userInputs: [UpdateUserInput!]!
  }
  input UpdateUserInput {
    academicProgramme: [String!]
    country: String
    userEmail: String
    userId: Float!
    userLabels: String
    userName: String
  }
`);
