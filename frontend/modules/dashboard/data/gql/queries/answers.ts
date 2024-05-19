import { graphql } from "@/core/utils/generator";

export const qFindAll = graphql(`
  query FindAll {
    findAll {
      Assessment
      Campaign
      Item_ID
      Item_Title
      Item_Type
      Statement_Labels
      User_Email
      User_ID
      User_Input
      User_Labels
      User_Name
      Verification_Status
    }
  }
`);
