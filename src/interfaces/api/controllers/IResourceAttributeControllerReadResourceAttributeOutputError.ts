export interface IResourceAttributeControllerReadResourceAttributeOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
