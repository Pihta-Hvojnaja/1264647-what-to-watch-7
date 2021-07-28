
import { NameSpace } from '../root-reducer';


export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export const getId = (state) => state[NameSpace.USER].authInfo.id;
export const getEmail = (state) => state[NameSpace.USER].authInfo.email;
export const getName = (state) => state[NameSpace.USER].authInfo.name;
export const getAvatarUrl = (state) => state[NameSpace.USER].authInfo.avatarUrl;
