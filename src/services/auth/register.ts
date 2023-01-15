import { IReqRegister, IResRegister } from "../../interfaces/auth";

const Register = ({ email, username, password }: IReqRegister): IResRegister => {
    return { status: 200, message: "User Registered!" };
}

export default Register;