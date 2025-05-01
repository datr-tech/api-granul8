import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorUserId,
} from '@app-ag/api/modelValidators/foreign';

import { modelValidatorAttributeId } from '@app-ag/api/modelValidators/local';

import {
  userAttributeModelSchema,
  userAttributeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-granul8';
import { model, Schema } from 'mongoose';

const userAttributeSchema = new Schema(
  userAttributeModelSchema,
  userAttributeModelSchemaOptions,
);

userAttributeSchema.post('validate', modelValidatorAttributeId);
userAttributeSchema.post('validate', modelValidatorUserId);
userAttributeSchema.post('validate', modelValidatorAdminStatusId);
userAttributeSchema.post('validate', modelValidatorAdminUserId);

export const UserAttributeModel = model('UserAttributeModel', userAttributeSchema);
