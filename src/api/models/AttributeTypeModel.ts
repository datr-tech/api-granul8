import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app-ag/api/modelValidators';
import {
  attributeTypeModelSchema,
  attributeTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-granul8';
import { model, Schema } from 'mongoose';

const attributeTypeSchema = new Schema(
  attributeTypeModelSchema,
  attributeTypeModelSchemaOptions,
);

attributeTypeSchema.post('validate', modelValidatorAdminStatusId);
attributeTypeSchema.post('validate', modelValidatorAdminUserId);

export const AttributeTypeModel = model('AttributeTypeModel', attributeTypeSchema);
