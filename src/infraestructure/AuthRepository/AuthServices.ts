import { IAuthServices } from "../../application/Auth/auth";
import { IAuth, IAuthResponse } from "../../domain/AuthDto/auth";
import AuthClient from "../../utils/configuration";

export default function AuthServices(): IAuthServices {
    const AuthGet = async (auth: IAuth):Promise<IAuthResponse> => {
        const res = await AuthClient.post("Auth/login", auth).then((res) => res.data);
        return res;
    };
    return { AuthGet };
}