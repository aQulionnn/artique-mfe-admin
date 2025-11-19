import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-link',
    standalone: false,
    templateUrl: './link.html',
    styleUrl: './link.css'
})

export class Link {
    @Input({ required: true }) icon: string = ''
    @Input({ required: true }) route: string = ''
    @Input({ required: true }) label: string = ''
}
