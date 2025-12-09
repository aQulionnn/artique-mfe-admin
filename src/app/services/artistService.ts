import { AxiosInstance } from "axios";
import { QueryResponse } from "../interfaces/artwork";
import { CreateArtistRequest, UpdateArtistRequest } from '../interfaces/artist'

export const createArtist = async (api: AxiosInstance, request: CreateArtistRequest) => {
    const {data} = await api.post("artists", request)
    return data
}

export const updateArtist = async (api: AxiosInstance, id: string, request: UpdateArtistRequest) => {
    const {data} = await api.put(`artists/${id}`, request)
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

export const searchArtists = async <TResponse>(
    api: AxiosInstance,
    name: string,
    fields: string[]
) => {
    const query = `
        query SearchArtists($input: SearchArtistsInput!) {
            searchArtists(input: $input) {
                ${fields.join(' ')}
            }
        }
    `

    const variables = {
        input: {
            name: name
        }
    }

    const { data } = await api.post<QueryResponse<TResponse>>("", { query, variables })
    return data
}
