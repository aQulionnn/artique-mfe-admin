import { Component, OnInit } from '@angular/core';
import { createReadApi } from "../../services/readApi"
import { environment } from '../../../environments/environment'
import { Search } from '../../components/search/search'
import { Router } from '@angular/router'


@Component({
    selector: 'app-artworks',
    imports: [
        Search
    ],
    templateUrl: './artworks.html',
    styleUrl: './artworks.css'
})

export class Artworks implements OnInit {

    constructor(private readonly router: Router) { }

    searchText = ''
    artworks: Artwork[] = []

    private readApi = createReadApi(`${environment.apiUrl}/graphql`)
    private fields = ["id", "title", "year"]

    async ngOnInit() {
        await this.loadArtworks("");
    }

    async onSearch(query: string) {
        this.searchText = query;
        await this.loadArtworks(query);
    }

    private async loadArtworks(query: string) {
        const response = await this.readApi.searchArtworks<{ artworks: Artwork[] }>(query, [], [], this.fields);
        this.artworks = response.data.searchArtworks;
    }

    async add() {
        await this.router.navigate(['/artworks/add']);
    }

    async edit(id: string) {
        await this.router.navigate(['/artworks/edit', id]);
    }
}

type Artwork = {
    id: string,
    title: string,
    year: number,
}
