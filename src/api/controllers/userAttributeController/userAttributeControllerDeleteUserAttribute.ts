import { UserAttributeModel } from '@app-ag/api/models';
import { Types } from 'mongoose';

export const userAttributeControllerDeleteUserAttribute = async ({ userAttributeId }) => {
  const res = await UserAttributeModel.findOneAndUpdate(
    {
      _id: userAttributeId,
    },
    {
      adminStatusId: new Types.ObjectId(),
    },
    {
      includeResultMetadata: true,
    },
  );

  return res;
};
