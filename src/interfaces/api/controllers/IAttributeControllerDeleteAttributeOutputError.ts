export interface IAttributeControllerDeleteAttributeOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
