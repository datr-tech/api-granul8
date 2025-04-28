import { IAttributeControllerDeleteAttributeOutputError } from './IAttributeControllerDeleteAttributeOutputError';
import { IAttributeControllerDeleteAttributeOutputSuccess } from './IAttributeControllerDeleteAttributeOutputSuccess';

export type IAttributeControllerDeleteAttributeOutput =
  | IAttributeControllerDeleteAttributeOutputSuccess
  | IAttributeControllerDeleteAttributeOutputError;
