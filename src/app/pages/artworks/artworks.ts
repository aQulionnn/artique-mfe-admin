import { Component, OnInit } from '@angular/core';
import { createReadApi } from "../../services/readApi"
import { environment } from '../../../environments/environment'
import { Search } from '../../components/search/search'


@Component({
    selector: 'app-artworks',
    imports: [
        Search
    ],
    templateUrl: './artworks.html',
    styleUrl: './artworks.css'
})

export class Artworks implements OnInit {
    searchText = ''
    artworks: Artwork[] = []

    private api = createReadApi(`${environment.apiUrl}/graphql`)
    private fields = ["id", "title", "year"]

    async ngOnInit() {
        await this.loadArtworks("");
    }

    async onSearch(query: string) {
        this.searchText = query;
        await this.loadArtworks(query);
    }

    private async loadArtworks(query: string) {
        const response = await this.api.searchArtworks<{ artworks: Artwork[] }>(query, [], [], this.fields);
        this.artworks = response.data.searchArtworks;
    }
}

type Artwork = {
    id: string,
    title: string,
    year: number,
}
