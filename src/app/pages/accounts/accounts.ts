import { Component, OnInit } from '@angular/core';
import { createReadApi } from '../../services/readApi'

@Component({
    selector: 'app-accounts',
    imports: [],
    templateUrl: './accounts.html',
    styleUrl: './accounts.css'
})
export class Accounts implements OnInit {
    accounts: Account[] = []

    async ngOnInit() {
        const api = createReadApi("https://localhost:7039/graphql")
        const fields = ["id", "username", "email"]

        const response = await api.getAccounts<{ accounts: Account[] }>(fields)
        this.accounts = response.data.accounts
        console.log(response)
    }
}

type Account = {
    id: string,
    username: string,
    email: string,
}
