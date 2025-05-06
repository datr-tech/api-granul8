import { IResourceAttributeModel } from '@app-ag/interfaces/api/models';

export interface IResourceAttributeControllerReadResourceAttributeOutputSuccess {
  error: false;
  payload: {
    resourceAttributeModel: IResourceAttributeModel;
    responseStatusCode: number;
  };
}
