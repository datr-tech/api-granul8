import { UserAttributeModel } from '@app-ag/api/models';

export const userAttributeControllerUpdateUserAttribute = async ({
  userAttributeId,
  payload,
}) => {
  const res = await UserAttributeModel.findOneAndUpdate(
    {
      _id: userAttributeId,
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
