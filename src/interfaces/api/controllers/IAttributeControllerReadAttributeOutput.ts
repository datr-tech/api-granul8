import { IAttributeControllerReadAttributeOutputError } from './IAttributeControllerReadAttributeOutputError';
import { IAttributeControllerReadAttributeOutputSuccess } from './IAttributeControllerReadAttributeOutputSuccess';

export type IAttributeControllerReadAttributeOutput =
  | IAttributeControllerReadAttributeOutputSuccess
  | IAttributeControllerReadAttributeOutputError;
