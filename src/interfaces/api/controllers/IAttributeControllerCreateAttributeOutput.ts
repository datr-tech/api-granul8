import { IAttributeControllerCreateAttributeOutputError } from './IAttributeControllerCreateAttributeOutputError';
import { IAttributeControllerCreateAttributeOutputSuccess } from './IAttributeControllerCreateAttributeOutputSuccess';

export type IAttributeControllerCreateAttributeOutput =
  | IAttributeControllerCreateAttributeOutputSuccess
  | IAttributeControllerCreateAttributeOutputError;
