import axios from "axios";
import { CreateArtworkRequest, UpdateArtworkDescriptionRequest, UpdateArtworkRequest } from "../interfaces/artwork";
import { createArtwork, deleteArtwork, updateArtwork, updateArtworkDescription } from "./artworkService";
import { createArtist, updateArtist } from "./artistService";
import { signIn, signUp } from "./accountService";
import { SignInRequest, SignUpRequest } from "../interfaces/account";
import { CreateArtistRequest, UpdateArtistRequest } from '../interfaces/artist'

export const createWriteApi = (url: string) => {
    const api = axios.create({
        baseURL: url
    })

    api.interceptors.response.use(
        response => response,
        error => Promise.reject(error)
    )

    return {
        createArtwork: (request: CreateArtworkRequest) => createArtwork(api, request),
        updateArtwork: (id: string, request: UpdateArtworkRequest) => updateArtwork(api, id, request),
        updateArtworkDescription: (id: string, request: UpdateArtworkDescriptionRequest) => updateArtworkDescription(api, id, request),
        deleteArtwork: (id: string) => deleteArtwork(api, id),

        createArtist: (request: CreateArtistRequest) => createArtist(api, request),
        updateArtist: (id: string, request: UpdateArtistRequest) => updateArtist(api, id, request),

        signIn: (request: SignInRequest) => signIn(api, request),
        signUp: (request: SignUpRequest) => signUp(api, request)
    }
}
