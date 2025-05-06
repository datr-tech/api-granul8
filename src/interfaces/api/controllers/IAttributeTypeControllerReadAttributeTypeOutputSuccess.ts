import { IAttributeTypeModel } from '@app-ag/interfaces/api/models';

export interface IAttributeTypeControllerReadAttributeTypeOutputSuccess {
  error: false;
  payload: {
    attributeTypeModel: IAttributeTypeModel;
    responseStatusCode: number;
  };
}
