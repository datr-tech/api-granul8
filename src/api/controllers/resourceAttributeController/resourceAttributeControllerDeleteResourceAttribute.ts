import { ResourceAttributeModel } from '@app-ag/api/models';
import { Types } from 'mongoose';

export const resourceAttributeControllerDeleteResourceAttribute = async ({
  resourceAttributeId,
}) => {
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
