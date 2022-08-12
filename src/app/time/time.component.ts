import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { TimeModel } from '../models/TimeModel';
import { TimeService } from '../services/time.service';
import { TimeDialogComponent } from './time-dialog/time-dialog.component';



@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  time!: TimeModel;
  isCriar = false;
  public allTimes = new Array<TimeModel>;
  displayedColumns: string[] = ['id', 'nome', 'ativo', 'datacadastro', 'action'];

  constructor(public dialog: MatDialog, private _timeService:TimeService) { }

  ngOnInit(): void {
    this.getTimes();
  }

  openDialog(id: number){
    this.getById(id);
    debugger
    if(id < 1){
      this.isCriar = true;
    }
    const dialogRef = this.dialog.open(TimeDialogComponent, {
      width: '1300px',
      data: {
        isCriar: this.isCriar,
        idTime: id
       }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  getTimes(){
    this._timeService.getTimes().subscribe((response: any) =>{
      this.allTimes = response;
      console.log(this.allTimes);
    });
  }

  getById(id: number) {
    this._timeService.getById(id).subscribe((response: any) =>{
      this.time = response;
    });
  }

  delete(){
  }

  update(){
  }
}
