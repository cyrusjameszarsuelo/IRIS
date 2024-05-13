import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {
  FormsModule,
  FormGroupDirective,
  NgForm,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-create-candidate',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatIconModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-candidate.component.html',
  styleUrl: './create-candidate.component.css',
})
export class CreateCandidateComponent {
  myControl = new FormControl('');
  sources: string[] = ['Jobstreet', 'Indeed', 'Linkedin'];
  names: string[] = [
    'Jason Vergara',
    'Cyrus James Zarsuelo',
    'Charles Verdadero',
  ];
  candidateStatus: string[] = ['Declined', 'Hired', 'Rejected', 'Offers'];
  gender: string[] = ['Male', 'Female'];

  selectedFile: any = null;
  fileName: string ;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    this.fileName = event.target.files[0].name;
    console.log(this.fileName)
    
  }
}
