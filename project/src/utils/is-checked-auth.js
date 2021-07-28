
import { AuthorizationStatus } from '../const';


export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN ||
  authorizationStatus === AuthorizationStatus.NO_AUTH;
