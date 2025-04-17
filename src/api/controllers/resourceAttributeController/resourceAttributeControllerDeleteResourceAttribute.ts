import { Types } from 'mongoose';
import { ResourceAttributeModel } from '@app/api/models';

export const resourceAttributeControllerDeleteResourceAttribute = async ({ resourceAttributeId }) => {
  const res = await ResourceAttributeModel.findOneAndUpdate(
    {
      _id: resourceAttributeId,
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
