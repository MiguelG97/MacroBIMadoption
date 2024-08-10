import { graphql } from "@/core/utils/generator";

export const qFindAllUsers = graphql(`
  query FindAllUsers {
    findAllUsers {
      academicProgramme
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
      academicProgramme
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
      academicProgramme
      country
      userEmail
      userId
      userLabels
      userName
    }
  }
`);
