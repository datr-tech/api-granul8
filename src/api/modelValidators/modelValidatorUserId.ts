import { personaService } from '@freight/common-api-services';

export const modelValidatorUserId = async (doc, next) => {
  let userId;
  let hasUser = false;

  if (doc && typeof doc.userId !== 'undefined') {
    userId = doc.userId;
  }

  if (userId) {
    hasUser = await personaService.hasUser({
      userId,
      isAdmin: false,
    });
  }

  if (!hasUser) {
    throw new Error('userId: invalid');
  }

  next();
};
