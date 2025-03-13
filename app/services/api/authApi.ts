import { toast } from 'sonner';
import { Axios } from '../httpClient/axiosInstance';

import { useMutation, useQuery } from '@tanstack/react-query';

import { ApiRoutes } from './apiRoutes';
import { encryptJson } from '~/lib/security';
import { queryKeys } from '~/lib/constants';
import type { apiRequestParams } from '~/interfaces/layout_interface';
import {
  type ILoginFormPayload,
  type ILoginResponse,
  type IRegisterFormPayload,
  type ISignupResponse,
  type ISocialLoginFormPayload,
  type ISocialRegisterFormPayload,
  type ISupport,
  type ISupportResponse,
  type IUpdatePasswordPayload,
  type IUpdatePasswordResponse,
  type Member,
  StoreIds,
} from '~/interfaces/authTypes';

export const ENCRYPTIONKEY = '';

export const useLoginApi = ({ onSuccess, onError }: apiRequestParams) => {
  const { mutate: handleLogin, isPending } = useMutation({
    mutationFn: async (requestPayload: ILoginFormPayload) => {
      const response = await Axios.post<ILoginResponse>(ApiRoutes.login, requestPayload);

      if (response.data == undefined || response.data == null) {
        //@ts-expect-error
        throw new Error(response.message);
      } else {
        const data: ILoginResponse = response.data;
        return data;
      }
    },
    onSuccess: (data) => {
      const {
        timestamp,
        data: { token, ...rest },
      } = data;

      localStorage.setItem(
        StoreIds.TOKEN,
        JSON.stringify(
          encryptJson({
            data: { ...token, timestamp: timestamp + 36000 },
            secret: ENCRYPTIONKEY,
          })
        )
      );
      localStorage.setItem(
        StoreIds.USERDETAILS,
        JSON.stringify(encryptJson({ data: rest, secret: ENCRYPTIONKEY }))
      );

      onSuccess?.(rest);
    },
    onError: (error: any) => {
      onError?.(error.message);
    },
  });

  return { handleLogin, isPending };
};
export const useUpdatePaswordApi = ({
  onSuccess,
  onError,
  customerId,
  accessToken,
}: apiRequestParams & {
  customerId: string;
  accessToken: string;
}) => {
  const { mutate: handleUpdatePassword, isPending: isUpdating } = useMutation({
    mutationFn: async (requestPayload: IUpdatePasswordPayload) => {
      const response = await Axios.post<IUpdatePasswordResponse>(
        ApiRoutes.updatePassword,
        { password: requestPayload.password },
        {
          headers: {
            'X-OST-CUSTOMER-ID': customerId,
            'X-OST-APP-TOKEN': accessToken,
          },
        }
      );

      if (response.data?.data == undefined || response.data?.data == null) {
        //@ts-expect-error
        throw new Error(response.message);
      } else {
        const data: IUpdatePasswordResponse = response.data;
        return data.data;
      }
    },
    onSuccess: (data) => {
      onSuccess?.(data.updated);
    },
    onError: (error: any) => {
      onError?.(error.message);
    },
  });

  return { handleUpdatePassword, isUpdating };
};


export const useDeleteApi = ({ onSuccess, onError }: apiRequestParams) => {
  const { mutate: handleDeleteAccount, isPending: isDeletingAccount } = useMutation({
    mutationFn: async (requestPayload: { customerId: string; accessToken: string }) => {
      const { data } = await Axios.post(
        ApiRoutes.deleteAccount,
        {},
        {
          headers: {
            'X-OST-CUSTOMER-ID': `${requestPayload.customerId}`,
            'X-OST-APP-TOKEN': `${requestPayload.accessToken}`,
          },
        }
      );

      if (data?.code !== 0) {
        throw new Error(data?.message);
      }

      return data;
    },
    onSuccess: (data) => {
      onSuccess?.(data);
    },
    onError: (error: any) => {
      toast.error(error.message);
      onError?.(error.message);
    },
  });

  return { handleDeleteAccount, isDeletingAccount };
};

export const useCreateAccountApi = ({ onSuccess, onError }: apiRequestParams) => {
  const { mutate: handleCreateAccount, isPending } = useMutation({
    mutationFn: async (requestPayload: IRegisterFormPayload) => {
      const response = await Axios.post<ISignupResponse>(
        ApiRoutes.createAccount,
        requestPayload
      );
      if (response.data?.data == undefined || response.data?.data == null) {
        //@ts-expect-error
        throw new Error(response.message);
      } else {
        const data: ISignupResponse = response.data;
        return data?.data;
      }
    },
    onSuccess: (data) => {
      if (data?.customerId) {
        onSuccess?.(true);
      } else {
        onSuccess?.(false);
      }
    },
    onError: (error: any) => {
      onError?.(error.message);
    },
  });

  return { handleCreateAccount, isPending };
};

export const useCreateSocialAccountApi = ({ onSuccess, onError }: apiRequestParams) => {
  const { mutate: handleCreateSocialAccount, isPending: isRegisteringSocialAccount } =
    useMutation({
      mutationFn: async (requestPayload: ISocialRegisterFormPayload) => {
        const savedDetails = JSON.parse(localStorage.getItem(StoreIds.SOCIALLOGIN) ?? '{}');

        const response = await Axios.post(ApiRoutes.socialSignUp, {
          ...requestPayload,
          service: savedDetails?.service,
          service_token: savedDetails?.service_token,
          email: savedDetails?.email,
        });

        if (response.data?.data == undefined || response.data?.data == null) {
          //@ts-expect-error
          throw new Error(response.message);
        } else {
          localStorage.removeItem(StoreIds.SOCIALLOGIN);
          return response.data;
        }
      },
      onSuccess: (data) => {
        if (data?.data?.customerId) {
          const {
            timestamp,
            data: { token, ...rest },
          } = data;

          localStorage.setItem(
            StoreIds.TOKEN,
            JSON.stringify(
              encryptJson({
                data: { ...token, timestamp: timestamp + 36000 },
                secret: ENCRYPTIONKEY,
              })
            )
          );
          localStorage.setItem(
            StoreIds.USERDETAILS,
            JSON.stringify(encryptJson({ data: rest, secret: ENCRYPTIONKEY }))
          );

          window.location.reload();
        } else {
          if (data?.data?.validCredentials) {
            window.location.href = '/';
          } else {
            toast.error('could not authenticate, please use another account');
          }
        }
      },
      onError: (error: any) => {
        onError?.(error.message);
      },
    });

  return { handleCreateSocialAccount, isRegisteringSocialAccount };
};

export const useSendEmailApi = ({ onSuccess, onError }: apiRequestParams) => {
  const { mutate: handleSendEmail, isPending: isSendingEmail } = useMutation({
    mutationFn: async (requestPayload: ISupport) => {
      const response = await Axios.post<ISupportResponse>(ApiRoutes.contact, requestPayload);
      if (response.data?.data == undefined || response.data?.data == null) {
        //@ts-expect-error
        throw new Error(response.message);
      } else {
        const data: ISupportResponse = response.data;
        return data;
      }
    },
    onSuccess: (data) => {
      if (data?.data.status.length > 0) {
        toast.error(data.data.status);
        onSuccess?.(data.data.status);
      } else {
        toast.error(data.message);
        onSuccess?.('');
      }
    },
    onError: (error: any) => {
      toast.error(error.message);
      onError?.(error.message);
    },
  });

  return { handleSendEmail, isSendingEmail };
};

export const useResendVerificationEmailApi = ({ onSuccess }: apiRequestParams) => {
  const { mutate: resendVerificationEmail, isPending } = useMutation({
    mutationFn: async (email: string) => {
      const { data } = await Axios.post(
        `/auth/verifymail
      `,
        { email }
      );
      return data;
    },
    onSuccess,
  });

  return {
    resendVerificationEmail,
    isPending,
  };
};
