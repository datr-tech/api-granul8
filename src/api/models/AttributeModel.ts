import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app-ag/api/modelValidators/foreign';

import { modelValidatorAttributeTypeId } from '@app-ag/api/modelValidators/local';

import {
  attributeModelSchema,
  attributeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-granul8';

import { model, Schema } from 'mongoose';

const attributeSchema = new Schema(attributeModelSchema, attributeModelSchemaOptions);

attributeSchema.post('validate', modelValidatorAttributeTypeId);
attributeSchema.post('validate', modelValidatorAdminStatusId);
attributeSchema.post('validate', modelValidatorAdminUserId);

export const AttributeModel = model('AttributeModel', attributeSchema);
