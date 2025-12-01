import { Component, OnInit } from '@angular/core';
import { createReadApi } from '../../services/readApi'
import { environment } from '../../../environments/environment'
import { Search } from '../../components/search/search'

@Component({
    selector: 'app-accounts',
    imports: [
        Search
    ],
    templateUrl: './accounts.html',
    styleUrl: './accounts.css'
})
export class Accounts implements OnInit {
    searchText = ''
    accounts: Account[] = []

    private api = createReadApi(`${environment.apiUrl}/graphql`)
    private fields = ["id", "username", "email"]

    async ngOnInit() {
        await this.loadAccounts("")
    }

    async onSearch(query: string) {
        this.searchText = query;
        await this.loadAccounts(query);
    }

    private async loadAccounts(query: string) {
        const response = await this.api.searchAccounts<{ accounts: Account[] }>(query, this.fields);
        this.accounts = response.data.searchArtworks;
    }
}

type Account = {
    id: string,
    username: string,
    email: string,
}
