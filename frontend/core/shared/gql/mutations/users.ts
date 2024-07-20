import { graphql } from "@/core/utils/generator";

export const mCreateUser = graphql(`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      bimAcademicProgram
      country
      userEmail
      userId
      userLabels
      userName
    }
  }

  input CreateUserInput {
    bimAcademicProgram: String
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
      bimAcademicProgram
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
