export interface Asset {
  accountId: string;
  bank: string;
  balance: number;
  currency: string;
  exchangeRate: number;
}

export interface AssetType {
  type: string;
  assets: Asset[];
}

export interface ChartData {
  name: string;
  value: number;
  color: string;
}