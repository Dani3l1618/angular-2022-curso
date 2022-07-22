import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MouseService } from '../api/mouse.service';
import { Mouse } from '../model/data.model';
import { FeedbackService } from '../services/feedback.service';


@Component({
  selector: 'app-mouselist',
  templateUrl: './mouselist.component.html',
  styleUrls: ['./mouselist.component.scss']
})
export class MouselistComponent implements OnInit {
  
  dataMouse = new MatTableDataSource<Mouse>();
  displayedColumns = ["id", "brand", "model","type", "year","actions"];

  constructor(
    private mosesrv: MouseService, 
    private feed: FeedbackService) 
    {

    this.feed.loading.next(true);
    this.loadData();

   
  }

  loadData(){
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
  deleteItem(item: Mouse){
    if(item.id){
    this.feed.loading.next(true);

    this.mosesrv.deleteMouse(item.id).subscribe({
      next:()=>{
        this.feed.loading.next(false);
        this.loadData();

      },
      error:()=>{
        this.feed.loading.next(false);
        this.feed.showMessage('Lo sentimos, no se pudo eliminar el elemento');
      }
    })
  }

  }

  ngOnInit(): void {
  }

}
