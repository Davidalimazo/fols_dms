import { Axios } from '../httpClient/axiosInstance';
import { ApiRoutes } from './apiRoutes';
import { type IFollowUp } from '~/interfaces/authTypes';

export const fetchAllFollowUp = async () => {
  const { data } = await Axios.get<IFollowUp[]>(ApiRoutes.allFollowUpData);

  return data;
};

export const registerAFollowUp = async ({
  requestData,
}: {
  requestData: IFollowUp;
}): Promise<string> => {
  return await Axios.post(ApiRoutes.registerFollowUp, { ...requestData })
    .then((data) => {
      return data.data?.message;
    })
    .catch((err) => {
      return err.data.error;
    });
};

export const deleteAFollowUp = async ({ id }: { id: number }): Promise<string> => {
  return await Axios.delete(ApiRoutes.removeAFollowUpData({ id }))
    .then((data) => {
      return data.data?.message;
    })
    .catch((err) => {
      return err.data.error;
    });
};
