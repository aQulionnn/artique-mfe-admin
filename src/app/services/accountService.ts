import { AxiosInstance } from "axios";
import { SignInRequest, SignInResponse, SignUpRequest } from "../interfaces/account";
import { QueryResponse } from '../interfaces/artwork'

export const signIn = async (api: AxiosInstance, request: SignInRequest) => {
    const { data } = await api.post<SignInResponse>("/accounts/sign-in", request);
    return data
}

export const signUp = async (api: AxiosInstance, request: SignUpRequest) => {
    const { data } = await api.post("/accounts/sign-up", request);
    return data
}

export const getAccounts = async <TResponse>(api: AxiosInstance, fields: string[]) => {
    const query = `
        query {
            accounts {
                ${fields.join(" ")}
            }
        }
    `

    const { data } = await api.post<QueryResponse<TResponse>>("", { query })
    return data
}

export const getAccountById = async <TResponse>(api: AxiosInstance, id: string, fields: string[]) => {
    const query = `
        query {
            accountById(id: "${id}") {
                ${fields.join(" ")}
            }
        }
    `

    const variables = {
        id: id
    }

    const { data } = await api.post<QueryResponse<TResponse>>("", {query, variables})
    return data
}

export const searchAccounts = async <TResponse>(
    api: AxiosInstance,
    text: string,
    fields: string[]
) => {
    const query = `
        query SearchAccounts($input: SearchAccountsInput!) {
            searchAccounts(input: $input) {
                ${fields.join(' ')}
            }
        }
    `

    const variables = {
        input: {
            text: text
        }
    }

    const { data } = await api.post<QueryResponse<TResponse>>("", { query, variables })
    return data
}
