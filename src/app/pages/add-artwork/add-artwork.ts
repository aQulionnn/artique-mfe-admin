import { Component, OnInit } from '@angular/core';
import { createWriteApi } from '../../services/writeApi'
import { environment } from '../../../environments/environment'
import { FormGroup, FormsModule } from '@angular/forms'
import { createReadApi } from '../../services/readApi'

@Component({
  selector: 'app-add-artwork',
  imports: [
      FormsModule
  ],
  templateUrl: './add-artwork.html',
  styleUrl: './add-artwork.css',
})
export class AddArtwork implements OnInit {
    artists: Artist[] = []
    artwork: Artwork = {
        title: '',
        description: '',
        imageUrl: '',
        year: 0,
        artistId: ''
    }

    private writeApi = createWriteApi(`${environment.apiUrl}/api`)
    private readApi = createReadApi(`${environment.apiUrl}/graphql`)

    async ngOnInit() {
        const response = await this.readApi.getArtists<{ artists: Artist[] }>(["id", "name"])
        this.artists = response.data.artists
    }

    async save() {
        await this.writeApi.createArtwork(this.artwork)
    }
}

type Artwork = {
    title: string,
    description: string,
    imageUrl: string,
    year: number,
    artistId: string
}

type Artist = {
    id: string,
    name: string
}
