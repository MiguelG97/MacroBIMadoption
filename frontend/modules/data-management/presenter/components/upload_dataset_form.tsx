import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CountriesEnum } from "@/core/shared/enums/filters_enum";
import { CreateData } from "@/core/services/createData";
import {
  education_questionnaires,
  organization_questionnaires,
} from "@/core/shared/constants/questions";

export default function UploadDatasetForm() {
  const [file, setFile] = useState<File | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountriesEnum | "">(
    ""
  );
  const [selectedCampaign, setSelectedCampaign] = useState<string>("");
  const countryItems = Object.entries(CountriesEnum).map(([key, value]) => ({
    id: value as CountriesEnum,
    label: key,
  }));
  const campaignItems = [
    { id: "Education", label: "Education" },
    { id: "Organization", label: "Organization" },
  ];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file || !selectedCountry || !selectedCampaign) {
      alert("Please select an Excel file, a country item and a campaign item");
      return;
    }
    await CreateData.sendExcelDataToPostgresql({
      file,
      country: selectedCountry,
      questionnaires:
        selectedCampaign === "Education"
          ? education_questionnaires
          : organization_questionnaires,
    });
  };
  return (
    <Card className="max-w-md mx-auto mt-10 rounded-2xl shadow-md">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Upload Excel File</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Excel File Input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Excel file (.xlsx, .xls)
            </label>
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium"
            />
          </div>

          {/* Dropdown Selector */}
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <Select
              value={selectedCountry}
              onValueChange={(value) =>
                setSelectedCountry(value as CountriesEnum)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose a country" />
              </SelectTrigger>
              <SelectContent>
                {countryItems.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Dropdown Selector */}
          <div>
            <label className="block text-sm font-medium mb-1">Campaign</label>
            <Select
              value={selectedCampaign}
              onValueChange={setSelectedCampaign}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose a campaign" />
              </SelectTrigger>
              <SelectContent>
                {campaignItems.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
