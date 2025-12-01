import { Component, OnInit } from '@angular/core';
import { createReadApi } from '../../services/readApi'
import { environment } from '../../../environments/environment'
import { Search } from '../../components/search/search'

@Component({
    selector: 'app-artists',
    imports: [
        Search
    ],
    templateUrl: './artists.html',
    styleUrl: './artists.css'
})

export class Artists implements OnInit {
    searchText = ''
    artists: Artist[] = []

    private api = createReadApi(`${environment.apiUrl}/graphql`)
    private fields = ["id", "name"]

    async ngOnInit() {
        await this.loadArtists("");
    }

    async onSearch(query: string) {
        this.searchText = query;
        await this.loadArtists(query);
    }

    private async loadArtists(query: string) {
        const response = await this.api.searchArtists<{ artists: Artist[] }>(query, this.fields);
        this.artists = response.data.searchArtworks;
    }
}

type Artist = {
    id: string,
    name: string
}
