import { AxiosInstance } from "axios";
import { QueryResponse } from "../interfaces/artwork";


export const createArtist = async (api: AxiosInstance, request: CreateArtistRequest) => {
    const {data} = await api.post("artists", request)
    return data
}

export const getArtists = async <TResponse>(api: AxiosInstance, fields: string[]) => {
    const query = `
        query {
            artists {
                ${fields.join(" ")}
            }
        }
    `

    const { data } = await api.post<QueryResponse<TResponse>>("", { query })
    return data
}

export const getArtistById = async <TResponse>(api: AxiosInstance, id: string, fields: string[]) => {
    const query = `
        query {
            artistById(id: "${id}") {
                ${fields.join(" ")}
            }
        }
    `

    const variables = {
        id: id
    }

    const {data} = await api.post<QueryResponse<TResponse>>("", {query, variables})
    return data
}
