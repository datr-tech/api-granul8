import { AttributeTypeModel } from '@app/api/models';

export const attributeTypeControllerUpdateAttributeType = async ({ attributeTypeId, payload }) => {
  const res = await AttributeTypeModel.findOneAndUpdate(
    {
      _id: attributeTypeId,
    },
    payload,
    {
      includeResultMetadata: true,
    },
  );

  let existingDocUpdated;

  if (
    typeof res !== 'undefined' &&
    typeof res.lastErrorObject !== 'undefined' &&
    typeof res.lastErrorObject.updatedExisting !== 'undefined'
  ) {
    existingDocUpdated = res.lastErrorObject.updatedExisting === false;
  }

  return existingDocUpdated;
};
