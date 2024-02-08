import { ReduxState } from "../../store";

export const selectPage = (state: ReduxState) => state.homePage.page;
export const selectTab = (state: ReduxState) => state.homePage.tab;
