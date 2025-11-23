import axios from "axios";
import { CreateArtworkRequest, UpdateArtworkDescriptionRequest } from "../interfaces/artwork";
import { createArtwork, deleteArtwork, updateArtworkDescription } from "./artworkService";
import { createArtist } from "./artistService";
import { signIn, signUp } from "./accountService";
import { SignInRequest, SignUpRequest } from "../interfaces/account";

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
        updateArtworkDescription: (id: string, request: UpdateArtworkDescriptionRequest) => updateArtworkDescription(api, id, request),
        deleteArtwork: (id: string) => deleteArtwork(api, id),

        createArtist: (request: CreateArtistRequest) => createArtist(api, request),

        signIn: (request: SignInRequest) => signIn(api, request),
        signUp: (request: SignUpRequest) => signUp(api, request)
    }
}
