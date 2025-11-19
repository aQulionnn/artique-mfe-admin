import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from './components/layout/layout.module'

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        LayoutModule
    ],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {

}
