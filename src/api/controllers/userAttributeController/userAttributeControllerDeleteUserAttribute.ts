import { Types } from 'mongoose';
import { UserAttributeModel } from '@app/api/models';

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
