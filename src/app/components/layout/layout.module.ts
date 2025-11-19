import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Layout } from './layout'
import { SidebarModule } from './sidebar/sidebar.module'
import { RouterOutlet } from '@angular/router'

@NgModule({
    declarations: [
        Layout
    ],
    imports: [
        CommonModule,
        SidebarModule,
        RouterOutlet
    ],
    exports: [
        Layout
    ]
})

export class LayoutModule { }
