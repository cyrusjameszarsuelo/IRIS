import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [RouterOutlet, MatPaginator],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;

}
