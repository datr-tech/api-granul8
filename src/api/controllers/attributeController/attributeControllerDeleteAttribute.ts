import { AttributeModel } from '@app-ag/api/models';
import { Types } from 'mongoose';

export const attributeControllerDeleteAttribute = async ({ attributeId }) => {
  const res = await AttributeModel.findOneAndUpdate(
    {
      _id: attributeId,
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
