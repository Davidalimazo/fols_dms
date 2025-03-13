import { Axios } from '../httpClient/axiosInstance';
import { ApiRoutes } from './apiRoutes';
import {
  type IMember,

} from '~/interfaces/authTypes';

// export const useGetMembersApi = ({ onSuccess, onError }: apiRequestParams) => {
//   const { isLoading: isFetchingMembers } = useQuery({
//     queryKey: [queryKeys.getData('members')],
//     queryFn: async () => {
//       const { data } = await Axios.get<Member[]>(ApiRoutes.allUsers);

//       return data;
//     },
//     select(data) {
//       onSuccess?.(data);
//     },
//   });
//   return {
//     isFetchingMembers,
//   };
// };

export const fetchAllMembers = async () => {
  const { data } = await Axios.get<IMember[]>(ApiRoutes.allUsers);

  return data;
};

export const registerAMember = async ({
  requestData,
}: {
  requestData: IMember;
}): Promise<string> => {
  return await Axios.post(ApiRoutes.register, { ...requestData })
    .then((data) => {
      return data.data?.message;
    })
    .catch((err) => {
      return err.data.error;
    });
};

export const deleteAMember = async ({ id }: { id: number }): Promise<string> => {
  return await Axios.delete(ApiRoutes.removeMember({ id }))
    .then((data) => {
      return data.data?.message;
    })
    .catch((err) => {
      return err.data.error;
    });
};
