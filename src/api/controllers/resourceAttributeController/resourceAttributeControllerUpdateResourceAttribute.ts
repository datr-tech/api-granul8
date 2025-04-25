import { ResourceAttributeModel } from '@app-ag/api/models';

export const resourceAttributeControllerUpdateResourceAttribute = async ({
  resourceAttributeId,
  payload,
}) => {
  const res = await ResourceAttributeModel.findOneAndUpdate(
    {
      _id: resourceAttributeId,
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
