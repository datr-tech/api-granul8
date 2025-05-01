import { entityService } from '@datr.tech/leith-common-services';

export const modelValidatorResourceId = async (doc, next) => {
  let resourceId;
  let hasResource = false;

  if (doc && typeof doc.resourceId !== 'undefined') {
    resourceId = doc.resourceId;
  }

  if (resourceId) {
    hasResource = await entityService.hasResource({
      resourceId,
    });
  }

  if (!hasResource) {
    throw new Error('resourceId: invalid');
  }

  next();
};
