import { Component, OnInit } from '@angular/core';
import { createReadApi } from "@aqulionnn/artique-api-lib/src/services/readApi"


@Component({
    selector: 'app-artworks',
    imports: [],
    templateUrl: './artworks.html',
    styleUrl: './artworks.css'
})

export class Artworks implements OnInit {
    artworks: Artwork[] = []

    ngOnInit = async () => {
        const api = createReadApi("https://localhost:7039/graphql")
        const fields = ["id", "title"]

        const response = await api.getArtworks<{ artworks: Artwork[] }>(fields)
        this.artworks = response.data.artworks
    }
}

type Artwork = {
    id: string,
    title: string
}
