import { type IAccessToken, type IUserDetails, StoreIds } from '~/interfaces/authTypes';
import { isFutureTimestamp } from '~/lib/helpers';
import { decryptJson } from '~/lib/security';
import { ENCRYPTIONKEY } from '~/services/api/authApi';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

let user = {} as IUserDetails;
let isAuthenticated = false;
let accessToken = {} as IAccessToken;

// const getUserFromStorage = () => {
//   if (typeof window !== "undefined") {
//     const token = localStorage.getItem(StoreIds.TOKEN) ?? "";

//     const userDetails = localStorage.getItem(StoreIds.USERDETAILS) ?? "";
//     const decryptUserDetails: IUserDetails | null | undefined = decryptJson({
//       encryptedText: userDetails,
//       secret: ENCRYPTIONKEY,
//     }) as IUserDetails | null | undefined;

//     const decryptToken: any = decryptJson({
//       encryptedText: token,
//       secret: ENCRYPTIONKEY,
//     });
//     if (decryptToken) {
//       const isValid = isFutureTimestamp(decryptToken.timestamp);

//       accessToken = {
//         accessToken: decryptToken.access_token,
//         expiresIn: decryptToken.expires_in,
//         refreshToken: decryptToken.refresh_token,
//         timestamp: decryptToken.timestamp,
//       };
//       if (isValid) {
//         isAuthenticated = true;

//         user = decryptUserDetails as IUserDetails;
//       }
//     }
//   }
// };

// getUserFromStorage();

const initialState = {
  user: user,
  isAuthenticated: isAuthenticated,
  accessToken: accessToken,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<IUserDetails>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    setUser: (state, action: PayloadAction<IUserDetails>) => {
      state.user = { ...state.user, ...action.payload };
    },
    logOutUser: (state) => {
      state.user = {} as IUserDetails;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, setUser, logOutUser } = authSlice.actions;

export default authSlice.reducer;
