export type Payload = {
  key: keyof IUIState;
  value: any;
};

export interface IUIState {
  currentTab: 'all' | 'solo' | 'free';
}
