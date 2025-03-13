// import { MobileOperator, MobileProducts } from "@/interfaces/transactionTypes";
// import { ITakeOrder } from "@/modules/services/airtime/AirtimeSteps";
// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

// const order: ITakeOrder = {
//   msisdn: undefined,
//   operator: undefined,
//   product: undefined,
//   couponCode: undefined,
//   category: undefined,
// };

// const products: MobileProducts[] = [];
// const operators: MobileOperator[] = [];

// const initialState = {
//   order,
//   products,
//   operators,
// };

// export const orderSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     storeOrder: (state, action: PayloadAction<ITakeOrder>) => {
//       state.order = action.payload;
//     },
//     setStoreProducts: (state, action: PayloadAction<MobileProducts[]>) => {
//       state.products = action.payload;
//     },
//     setStoreOperators: (state, action: PayloadAction<MobileOperator[]>) => {
//       state.operators = action.payload;
//     },
//     updateOrder: (state, action: PayloadAction<ITakeOrder>) => {
//       state.order = { ...state.order, ...action.payload };
//     },
//     addCouponCode: (state, action: PayloadAction<String>) => {
//       state.order = { ...state.order, ...action.payload };
//     },
//     deleteOrder: (state) => {
//       state.order = {};
//     },
//   },
// });

// export const {
//   deleteOrder,
//   storeOrder,
//   updateOrder,
//   addCouponCode,
//   setStoreOperators,
//   setStoreProducts,
// } = orderSlice.actions;

// export default orderSlice.reducer;
