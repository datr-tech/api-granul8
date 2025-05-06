export interface IAttributeControllerReadAttributeOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
