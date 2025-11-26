import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { debounceTime, distinctUntilChanged } from 'rxjs'

@Component({
    selector: 'app-search',
    imports: [ReactiveFormsModule],
    templateUrl: './search.html',
    styleUrl: './search.css'
})

export class Search implements OnInit, OnChanges {
    @Input() searchTerm = '';
    @Output() searchChange = new EventEmitter<string>();

    searchControl = new FormControl('');

    ngOnInit() {
        this.searchControl.valueChanges.pipe(
            debounceTime(1000),
            distinctUntilChanged()
        ).subscribe(value => this.searchChange.emit(value ?? ''));
    }

    ngOnChanges() {
        if (this.searchControl.value !== this.searchTerm) {
            this.searchControl.setValue(this.searchTerm, { emitEvent: false });
        }
    }
}
