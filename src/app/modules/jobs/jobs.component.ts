<<<<<<< HEAD
import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
=======
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ELEMENT_DATA, PeriodicElement } from './periodic-element';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
>>>>>>> 88981194df4f985d3a283770daea6a852e79c9d8

@Component({
  selector: 'app-jobs',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, MatPaginator],
=======
  imports: [MatTableModule, MatPaginatorModule, RouterLink, RouterOutlet, MatSortModule],
>>>>>>> 88981194df4f985d3a283770daea6a852e79c9d8
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

<<<<<<< HEAD
  @ViewChild(MatPaginator) paginator: MatPaginator;

}
=======
  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
>>>>>>> 88981194df4f985d3a283770daea6a852e79c9d8
