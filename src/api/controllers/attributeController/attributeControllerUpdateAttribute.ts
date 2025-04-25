import { AttributeModel } from '@app-ag/api/models';

export const attributeControllerUpdateAttribute = async ({ attributeId, payload }) => {
  const res = await AttributeModel.findOneAndUpdate(
    {
      _id: attributeId,
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
