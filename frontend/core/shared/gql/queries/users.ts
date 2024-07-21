import { graphql } from "@/core/utils/generator";

export const qFindAllUsers = graphql(`
  query FindAllUsers {
    findAllUsers {
      academicProgram
      country
      userEmail
      userId
      userLabels
      userName
    }
  }
`);
export const qFindOneUser = graphql(`
  query FindOneUser($userId: Int!) {
    findOneUser(userId: $userId) {
      academicProgram
      country
      userEmail
      userId
      userLabels
      userName
    }
  }
`);
export const qFindManyUsers = graphql(`
  query FindManyUsers($userIds: [Int!]!) {
    findManyUsers(userIds: $userIds) {
      academicProgram
      country
      userEmail
      userId
      userLabels
      userName
    }
  }
`);
