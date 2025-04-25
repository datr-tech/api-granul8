import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorAttributeId,
  modelValidatorResourceId,
} from '@app-ag/api/modelValidators';
import {
  resourceAttributeModelSchema,
  resourceAttributeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-granul8';
import { model, Schema } from 'mongoose';

const resourceAttributeSchema = new Schema(
  resourceAttributeModelSchema,
  resourceAttributeModelSchemaOptions,
);

resourceAttributeSchema.post('validate', modelValidatorAttributeId);
resourceAttributeSchema.post('validate', modelValidatorResourceId);
resourceAttributeSchema.post('validate', modelValidatorAdminStatusId);
resourceAttributeSchema.post('validate', modelValidatorAdminUserId);

export const ResourceAttributeModel = model(
  'ResourceAttributeModel',
  resourceAttributeSchema,
);
