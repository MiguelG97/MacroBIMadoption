export interface IExcelRowJson {
  Assessment: string;
  Campaign: string;
  "Item ID": string;
  "Item Title": string;
  "Item Type": string;
  "Statement Labels": string;
  "User Email": string;
  "User ID": string;
  "User Input": string;
  "User Labels": string;
  "User Name": string;
  "Verification Status": string;

  //sometime comes without data
  "Assigned Auditors"?: string;
  "Auditor Note"?: string;
  Hashtags?: string;
}
