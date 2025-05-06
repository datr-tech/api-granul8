export interface IAttributeTypeControllerReadAttributeTypeOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
