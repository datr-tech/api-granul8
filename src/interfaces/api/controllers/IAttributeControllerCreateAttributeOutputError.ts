export interface IAttributeControllerCreateAttributeOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
