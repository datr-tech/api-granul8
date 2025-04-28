import { IUserAttributeModel } from '@app-ag/interfaces/api/models';

export interface IUserAttributeControllerReadUserAttributeOutputSuccess {
  error: false;
  payload: {
    userAttributeModel: IUserAttributeModel;
  };
}
