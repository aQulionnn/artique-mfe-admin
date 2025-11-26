import { Component, OnInit } from '@angular/core';
import { createReadApi } from '../../services/readApi'
import { environment } from '../../../environments/environment'

@Component({
    selector: 'app-artists',
    imports: [],
    templateUrl: './artists.html',
    styleUrl: './artists.css'
})

export class Artists implements OnInit {
    artists: Artist[] = []

    async ngOnInit() {
        const api = createReadApi(`${environment.apiUrl}/graphql`)
        const fields = ["id", "name"]

        const response = await api.getArtists<{ artists: Artist[] }>(fields)
        this.artists = response.data.artists
    }
}

type Artist = {
    id: string,
    name: string
}
