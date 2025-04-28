import { IAttributeModel } from '@app-ag/interfaces/api/models';

export interface IAttributeControllerReadAttributeOutputSuccess {
  error: false;
  payload: {
    attributeModel: IAttributeModel;
  };
}
