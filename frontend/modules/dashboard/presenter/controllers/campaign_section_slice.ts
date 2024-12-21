import {
  Campaign,
  EduSectionName,
  OrgSectionName,
} from "@/core/shared/enums/campaign_sections_enum";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface campaignSecState {
  activeCampaign: Campaign;
  activeSectionName: EduSectionName | OrgSectionName;
  activeSectionIndex: number;
  activeToolTipAccumValue: number;
}

// Define the initial state using that type
const initialState: campaignSecState = {
  activeCampaign: Campaign.Education_Landscape,
  activeSectionName: EduSectionName.Higher_edu_programmes,
  activeSectionIndex: 1,
  activeToolTipAccumValue: 0,
};

export const campaignSecSlice = createSlice({
  name: "campaignSecSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setActiveCampaignSection: (
      state,
      action: PayloadAction<{
        activeCampaign: Campaign;
        activeSectionName: EduSectionName | OrgSectionName;
        activeSectionIndex: number;
      }>
    ) => {
      state.activeCampaign = action.payload.activeCampaign;
      state.activeSectionName = action.payload.activeSectionName;
      state.activeSectionIndex = action.payload.activeSectionIndex;
    },
    setActiveTooltipAccValue: (state, action: PayloadAction<number>) => {
      state.activeToolTipAccumValue = action.payload;
    },
    resetCampaignState: () => initialState,
  },
});

export const {
  setActiveCampaignSection,
  setActiveTooltipAccValue,
  resetCampaignState,
} = campaignSecSlice.actions;

export default campaignSecSlice.reducer;
