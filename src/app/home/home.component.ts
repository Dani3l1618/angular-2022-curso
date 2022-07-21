import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MouseService } from '../api/mouse.service';
import { Mouse } from '../model/data.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  dataMouse = new MatTableDataSource<Mouse>();
  displayedColumns = ["id", "brand", "model","type", "year"];

  constructor(private mosesrv: MouseService, private feed: FeedbackService) {

    this.feed.loading.next(true);

    this.mosesrv.getMouses().subscribe({
      next: (data) => {
        this.feed.loading.next(false);
        this.dataMouse.data = data;
      },
      error: () => {
        this.feed.loading.next(false);
        this.feed.showMessage('Lo sentimos, ocurrió un error al obtener los datos')
      }
    })
  }

  ngOnInit(): void {
  }

}
