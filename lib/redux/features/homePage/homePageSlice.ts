import Tab from "@/lib/util/Tab";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface HomePageTab extends Tab {}

export class TagTab implements HomePageTab {
  displayName: string;

  constructor(readonly id: string) {
    this.displayName = id;
  }
}

export const globalFeedTab: HomePageTab = {
  id: "GLOBAL_TAB",
  displayName: "Global Feed",
};

export const myFeedTab: HomePageTab = {
  id: "MY_FEED",
  displayName: "My Feed",
};

export const initialState: HomePageState = {
  page: 1,
  tab: globalFeedTab,
};

export interface HomePageState {
  page: number;
  tab: HomePageTab;
}

export const homePageSlice = createSlice({
  name: "homePage",
  initialState: initialState,
  reducers: {
    setTab: (state, action: PayloadAction<HomePageTab>) => {
      state.tab = action.payload;
      state.page = 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setTab, setPage } = homePageSlice.actions;
