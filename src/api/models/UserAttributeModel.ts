import { model, Schema } from 'mongoose';
import { userAttributeModelSchema, userAttributeModelSchemaOptions } from '@freight/granul8-model-schemas';
import {
  modelValidatorAttributeId,
  modelValidatorUserId,
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app/api/modelValidators';

const userAttributeSchema = new Schema(userAttributeModelSchema, userAttributeModelSchemaOptions);

userAttributeSchema.post('validate', modelValidatorAttributeId);
userAttributeSchema.post('validate', modelValidatorUserId);
userAttributeSchema.post('validate', modelValidatorAdminStatusId);
userAttributeSchema.post('validate', modelValidatorAdminUserId);

export const UserAttributeModel = model('UserAttributeModel', userAttributeSchema);
