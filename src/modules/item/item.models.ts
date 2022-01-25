export interface IItemState {
  [k: string]: {
    name: string;
    description: string;
    plaintext: string;
    gold: {
      base: number;
    };
  };
}
