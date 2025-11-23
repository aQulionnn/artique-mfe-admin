import { AxiosInstance } from "axios";
import { SignInRequest, SignInResponse, SignUpRequest } from "../interfaces/account";

export const signIn = async (api: AxiosInstance, request: SignInRequest) => {
    const { data } = await api.post<SignInResponse>("/accounts/sign-in", request);
    return data
}

export const signUp = async (api: AxiosInstance, request: SignUpRequest) => {
    const { data } = await api.post("/accounts/sign-up", request);
    return data
}
