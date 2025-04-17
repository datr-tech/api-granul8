import { Types } from 'mongoose';
import { AttributeModel } from '@app/api/models';

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
