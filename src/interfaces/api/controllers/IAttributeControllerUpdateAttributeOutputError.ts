export interface IAttributeControllerUpdateAttributeOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
