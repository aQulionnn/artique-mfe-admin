export type CreateArtworkRequest = {
    title: string,
    description: string,
    imageUrl: string,
    year: number,
    artistId: string
}

export type UpdateArtworkRequest = {
    title: string,
    description: string,
    imageUrl: string,
    year: number,
}

export type UpdateArtworkDescriptionRequest = {
    description: string
}

export type QueryResponse<TResponse> = {
    data: T
    errors?: { message: string }[]
}

export type SearchArtworksInput = {
    title: string,
    artistId: string[]
    years: number[]
}
