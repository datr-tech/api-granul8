import { IAttributeControllerUpdateAttributeOutputError } from './IAttributeControllerUpdateAttributeOutputError';
import { IAttributeControllerUpdateAttributeOutputSuccess } from './IAttributeControllerUpdateAttributeOutputSuccess';

export type IAttributeControllerUpdateAttributeOutput =
  | IAttributeControllerUpdateAttributeOutputSuccess
  | IAttributeControllerUpdateAttributeOutputError;
