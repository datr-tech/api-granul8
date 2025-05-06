export interface IUserAttributeControllerReadUserAttributeOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
