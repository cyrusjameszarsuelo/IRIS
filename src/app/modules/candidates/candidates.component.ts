import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { RouterOutlet,  RouterModule } from '@angular/router';

@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [MatPaginator , RouterOutlet, RouterModule],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.css'
})
export class CandidatesComponent {

}
