import { Routes } from '@angular/router'
import { Artworks } from './pages/artworks/artworks'
import { Layout } from './components/layout/layout'
import { Artists } from './pages/artists/artists'
import { Accounts } from './pages/accounts/accounts'
import { EditArtwork } from './pages/edit-artwork/edit-artwork'
import { AddArtwork } from './pages/add-artwork/add-artwork'

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: 'artworks',
                component: Artworks
            },
            {
                path: 'artworks/add',
                component: AddArtwork
            },
            {
                path: 'artworks/edit/:id',
                component: EditArtwork
            },
            {
                path: 'artists',
                component: Artists
            },
            {
                path: 'accounts',
                component: Accounts
            }
        ]
    }
]
