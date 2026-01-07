import React from "react";
import UploadDatasetForm from "../components/upload_dataset_form";
import ResetDatasetCard from "../components/reset_dataset_card";

export default function DataManagementScreen() {
  return (
    <div className="flex flex-col space-y-6 max-w-md mx-auto mt-10">
      <UploadDatasetForm />
      <ResetDatasetCard />
    </div>
  );
}
