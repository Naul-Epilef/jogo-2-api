import { IRes } from "./general";

export interface IReqRegister {
    email: string;
    username: string;
    password: string;
}

export interface IResRegister extends IRes {

}