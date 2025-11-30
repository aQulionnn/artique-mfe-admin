import type { AxiosInstance } from "axios"
import {
    CreateArtworkRequest,
    QueryResponse,
    SearchArtworksInput,
    UpdateArtworkDescriptionRequest
} from "../interfaces/artwork"

export const createArtwork = async (api: AxiosInstance, request: CreateArtworkRequest) => {
    const {data} = await api.post("artworks", request)
    return data
}

export const updateArtworkDescription = async (api: AxiosInstance, id: string, request: UpdateArtworkDescriptionRequest) => {
    const {data} = await api.patch(`artworks/${id}/description`, request)
    return data
}

export const deleteArtwork = async (api: AxiosInstance, id: string) => {
    const {data} = await api.delete(`artworks/${id}`)
    return data
}

export const getArtworks = async <TResponse>(api: AxiosInstance, fields: string[]) => {
    const query = `
        query {
            artworks {
                ${fields.join(" ")}
            }
        }
    `

    const {data} = await api.post<QueryResponse<TResponse>>("", {query})
    return data
}

export const getArtworkById = async <TResponse>(api: AxiosInstance, id: string, fields: string[]) => {
    const query = `
        query {
            artworkById(id: "${id}") {
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

export const searchArtworks = async <TResponse>(
    api: AxiosInstance,
    title: string,
    artistIds: string[],
    years: number[],
    fields: string[]
) => {
    const query = `
        query SearchArtworks($input: SearchArtworksInput!) {
            searchArtworks(input: $input) {
                ${fields.join(' ')}
            }
        }
    `

    const variables = {
        input: {
            title: title,
            artistIds: artistIds,
            years: years
        }
    }

    const { data } = await api.post<QueryResponse<TResponse>>("", {query, variables})
    return data
}
