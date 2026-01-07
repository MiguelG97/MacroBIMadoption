import { graphql } from "@/core/utils/generator";
import { TypedDocumentNode } from "@apollo/client";

export const clearAllData = graphql(`
  mutation {
    clearAllData
  }
`) as unknown as TypedDocumentNode<{ clearAllData: boolean }, {}>;
