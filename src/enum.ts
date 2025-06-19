export enum CustomerType {
  REGULAR = "REGULAR",
  GOLD = "GOLD",
  PLATINUM = "PLATINUM",
}

export type Custormer = {
  id: number;
  name: string;
  type: CustomerType;
};

