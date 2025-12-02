import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { createReadApi } from '../../services/readApi'
import { environment } from '../../../environments/environment'
import { createWriteApi } from '../../services/writeApi'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-edit-artwork',
  imports: [
      FormsModule
  ],
  templateUrl: './edit-artwork.html',
  styleUrl: './edit-artwork.css',
})
export class EditArtwork implements OnInit {

    constructor(private readonly route: ActivatedRoute) { }

    artwork: Artwork = {
        id: '',
        title: '',
        description: '',
        imageUrl: '',
        year: 0
    }

    private readonly readApi = createReadApi(`${environment.apiUrl}/graphql`)
    private readonly writeApi = createWriteApi(`${environment.apiUrl}/api`)
    private id = ""

    private fields = ["id", "title", "description", "imageUrl", "year"]

    async ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id') ?? ""
        const response = await this.readApi.getArtworkById<{ artwork: Artwork }>(this.id ?? "", this.fields)
        this.artwork = response.data.artworkById
    }

    async save() {
        await this.writeApi.updateArtworkDescription(this.id, { description: this.artwork.description })
    }
}

type Artwork = {
    id: string,
    title: string,
    description: string,
    imageUrl: string,
    year: number,
}
