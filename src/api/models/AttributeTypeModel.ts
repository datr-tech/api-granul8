import { model, Schema } from 'mongoose';
import { attributeTypeModelSchema, attributeTypeModelSchemaOptions } from '@freight/granul8-model-schemas';
import { modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const attributeTypeSchema = new Schema(attributeTypeModelSchema, attributeTypeModelSchemaOptions);

attributeTypeSchema.post('validate', modelValidatorAdminStatusId);
attributeTypeSchema.post('validate', modelValidatorAdminUserId);

export const AttributeTypeModel = model('AttributeTypeModel', attributeTypeSchema);
