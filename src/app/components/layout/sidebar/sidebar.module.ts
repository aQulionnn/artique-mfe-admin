import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Sidebar } from './sidebar'
import { Link } from './link/link'
import { RouterLink } from '@angular/router'

@NgModule({
    declarations: [
        Link,
        Sidebar
    ],
    imports: [
        CommonModule,
        RouterLink
    ],
    exports: [
        Sidebar
    ]
})

export class SidebarModule { }
