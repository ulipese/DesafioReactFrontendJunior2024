export type Item = {
  id: string;
  title: string;
  isDone: boolean;
};

export type GetItemsResponse = {
  data: Item[];
};
