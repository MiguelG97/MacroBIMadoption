"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { gql, useApolloClient } from "@apollo/client";
import React from "react";
const CLEAR_ALL_DATA = gql`
  mutation ClearAllData {
    clearAllData
  }
`;
export default function ResetDatasetCard() {
  const client = useApolloClient();
  const handleReset = async () => {
    if (confirm("Are you sure you want to delete all data?")) {
      try {
        console.log("Reset database triggered");
        const result = await client.mutate<{ clearAllData: boolean }>({
          mutation: CLEAR_ALL_DATA,
        });
        alert("All data cleared!");
      } catch (err) {
        console.error("Failed to clear all data", err);
        alert("Failed to clear data");
      }
    }
  };

  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">Reset Database</h2>
        <Button variant="destructive" onClick={handleReset} className="w-full">
          Delete All Data
        </Button>
      </CardContent>
    </Card>
  );
}
