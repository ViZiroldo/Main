import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { TimeModel } from '../models/TimeModel';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  public allTimes = new Array<TimeModel>;
  displayedColumns: string[] = ['id', 'nome', 'ativo', 'datacadastro', 'action'];

  constructor(public dialog: MatDialog, private _timeService:TimeService) { }

  ngOnInit(): void {
    // this.getTimes();
  }

  // openDialog(element: TimeModel | null): void{
  //   const dialogRef = this.dialog.open(TimeDialogComponent, {
  //     width: '250px',
  //     data: element === null ? {
  //       name:'',
  //       position: null
  //     } : {
  //       name: element.nome,
  //       ativo: element.ativo
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result !== undefined){
  //       if(this.allTimes.map(p => p.id).includes(result.id)){
  //         this.allTimes[result.id - 1] = result;
  //         this.table.renderRows();
  //       }else{
  //         this.allTimes.push(result);
  //         this.table.renderRows();
  //       }

  //     }
  //   });
  // }

  // getTimes(){
  //   this._timeService.getTimes().subscribe((response: any) =>{

  //     this.allTimes = response;
  //     console.log(this.allTimes);
  //   });
  // }

  // deleteTime(){
  // }

  // updateTime(){
  // }
}
