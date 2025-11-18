export interface TransactionModel {
  id: string;
  amount: number | string;
  device?: string;
  status?: "online" | "offline" | "maintenance" | string;
  statusLabel?: string;
  date?: string | Date;
  pos?: string;
  statusVariant?: string;
  type?: string;
  typeVariant?: string;
}
