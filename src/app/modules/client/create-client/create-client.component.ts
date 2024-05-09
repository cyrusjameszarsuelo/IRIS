import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, startWith } from 'rxjs';
import { map } from 'rxjs/operators';
import { ErrorStateMatcher, provideNativeDateAdapter } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatDatepickerModule
    
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css',
})
export class CreateClientComponent implements OnInit {

  constructor(private http: HttpClient) {}

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<any[]>;
  sources: string[] = [];

  ngOnInit() {

    this.fetchSources().subscribe((sources) => {
      this.sources = sources.map((source) => source.name);

      this.filterOptions(this.sources);
    });
  }

  private filterOptions(dropdownValues: any) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || '', dropdownValues))
    );
  }

  private _filter(value: string, dropdownValues): string[] {
    const filterValue = value.toLowerCase();

    return dropdownValues.filter((response) =>
      response.toLowerCase().includes(filterValue)
    );
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  fetchSources() {
    return this.http.get<Sources[]>('http://127.0.0.1:8000/api/sources')
  }
}

export interface Sources {
  name: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  id?: number;
}

