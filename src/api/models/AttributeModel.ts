import { model, Schema } from 'mongoose';
import { attributeModelSchema, attributeModelSchemaOptions } from '@freight/granul8-model-schemas';
import { modelValidatorAttributeTypeId, modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const attributeSchema = new Schema(attributeModelSchema, attributeModelSchemaOptions);

attributeSchema.post('validate', modelValidatorAttributeTypeId);
attributeSchema.post('validate', modelValidatorAdminStatusId);
attributeSchema.post('validate', modelValidatorAdminUserId);

export const AttributeModel = model('AttributeModel', attributeSchema);
