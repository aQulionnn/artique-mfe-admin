import axios, { type AxiosInstance } from "axios";
import { getArtworkById, getArtworks, searchArtworks } from "./artworkService";
import { getArtistById, getArtists } from './artistService'
import { getAccounts } from './accountService'

export const createReadApi = (url: string) => {
    const api = axios.create({
        baseURL: url
    })

    api.interceptors.response.use(
        response => response,
        error => Promise.reject(error)
    )

    return {
        getArtworks: <TResponse>(fields: string[]) => getArtworks<TResponse>(api, fields),
        getArtworkById: <TResponse>(id: string, fields: string[]) => getArtworkById<TResponse>(api, id, fields),
        searchArtworks: <TResponse>(
            title: string,
            artistIds: string[],
            years: number[],
            fields: string[]
        ) => searchArtworks<TResponse>(api, title, artistIds, years, fields),

        getArtists: <TResponse>(fields: string[]) => getArtists<TResponse>(api, fields),
        getArtistById: <TResponse>(id: string, fields: string[]) => getArtistById<TResponse>(api, id, fields),

        getAccounts: <TResponse>(fields: string[]) => getAccounts<TResponse>(api, fields)
    }
}
