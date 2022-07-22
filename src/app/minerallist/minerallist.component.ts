import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MineralsService } from '../api/minerals.service';
import { Mineral } from '../model/data.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-minerallist',
  templateUrl: './minerallist.component.html',
  styleUrls: ['./minerallist.component.scss']
})
export class MinerallistComponent implements OnInit {

  dataMineral = new MatTableDataSource<Mineral>();
  displayedColumns = ["id","name","formula","category","crystal","mohs","density","actions"];
  constructor(
    private minsrv: MineralsService,
    private feed: FeedbackService
    ) 
    { 
      this.feed.loading.next(true);
      this.loadData();

    }

    loadData(){
      this.minsrv.getMinerales().subscribe({
        next:(data)=>{
          this.feed.loading.next(false);
          this.dataMineral.data = data;

        },
        error:()=>{
          this.feed.loading.next(false);
          this.feed.showMessage('Lo sentimos, no se pudo cargar la tabla de minerales');
        }
      })
    }

deleteItem(item:Mineral){}
  ngOnInit(): void {
  }

}
