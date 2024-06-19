// 币种字典
export const CURRENT_TYPES = [
  { value: 0, label: "usdt" },
  { value: 1, label: "btc" },
  { value: 2, label: "eth" },
  { value: 3, label: "sol" },
  { value: 4, label: "fdusd" },
  { value: 5, label: "bnb" },
  { value: 6, label: "usdc" },
  { value: 7, label: "wbeth" },
  { value: 8, label: "sui" },
  { value: 9, label: "sei" },
  { value: 10, label: "dot" },
  { value: 11, label: "manta" },
  // { value: 12, label: "inj" },
  // { value: 13, label: "tia" },
  // { value: 14, label: "matic" },
  // { value: 15, label: "ada" },
  // { value: 16, label: "avax" },
  // { value: 17, label: "axs" },
  // { value: 18, label: "doge" },
  // { value: 19, label: "trx" },
  // { value: 20, label: "cfx" },
  // { value: 21, label: "pepe" },
  // { value: 22, label: "xen" },
];

// 活期类型
export const TIME_TYPES = [
  { value: 0, label: "Current" },
  { value: 1, label: "7days" },
  { value: 2, label: "30days" },
  { value: 3, label: "180days" },
];

// 交易类型字典
export const DEAL_TYPES = [
  { value: 0, label: "Recharge", status: "recharge" },
  { value: 1, label: "Withdraw", status: "withdraw" },
];

// 收款状态
export const RECEIPT_STATUS = [
  { value: 0, label: "未处理" },
  { value: 1, label: "处理中", status: "pending" },
  { value: 2, label: "完成收款", status: "success" },
];
