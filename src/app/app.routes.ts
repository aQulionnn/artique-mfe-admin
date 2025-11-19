import { Routes } from '@angular/router'
import { Artworks } from './pages/artworks/artworks'
import { Layout } from './components/layout/layout'

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: 'artworks',
                component: Artworks
            }
        ]
    }
]
