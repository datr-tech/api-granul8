import { model, Schema } from 'mongoose';
import { resourceAttributeModelSchema, resourceAttributeModelSchemaOptions } from '@freight/granul8-model-schemas';
import {
  modelValidatorAttributeId,
  modelValidatorResourceId,
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app/api/modelValidators';

const resourceAttributeSchema = new Schema(resourceAttributeModelSchema, resourceAttributeModelSchemaOptions);

resourceAttributeSchema.post('validate', modelValidatorAttributeId);
resourceAttributeSchema.post('validate', modelValidatorResourceId);
resourceAttributeSchema.post('validate', modelValidatorAdminStatusId);
resourceAttributeSchema.post('validate', modelValidatorAdminUserId);

export const ResourceAttributeModel = model('ResourceAttributeModel', resourceAttributeSchema);
