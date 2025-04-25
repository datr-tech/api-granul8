import { model, Schema } from 'mongoose';
import { userAttributeModelSchema, userAttributeModelSchemaOptions } from '@datr.tech/parcel-model-schemas-granul8';
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
