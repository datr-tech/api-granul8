import { Types } from 'mongoose';
import { AttributeTypeModel } from '@app/api/models';

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
