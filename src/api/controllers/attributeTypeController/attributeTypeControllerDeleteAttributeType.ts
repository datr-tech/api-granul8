import { AttributeTypeModel } from '@app-ag/api/models';
import { Types } from 'mongoose';

export const attributeTypeControllerDeleteAttributeType = async ({ attributeTypeId }) => {
  const res = await AttributeTypeModel.findOneAndUpdate(
    {
      _id: attributeTypeId,
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
