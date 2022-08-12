import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { TorneioModel } from '../models/TorneioModel';
import { TorneioService } from '../services/torneio.service';
import { TorneioDialogComponent } from './torneio-dialog/torneio-dialog.component';


export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD MMM, YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-torneio',
  templateUrl: './torneio.component.html',
  styleUrls: ['./torneio.component.css']
})
export class TorneioComponent implements OnInit {
  newTorneio!: TorneioModel;
  @ViewChild(MatTable)
  table!: MatTable<any>;
  idTorneio = false;

  constructor(
    public dialog: MatDialog,
    private _torneioService: TorneioService,
    public datepipe: DatePipe
    ) { }

  ngOnInit(): void {
    this.getById();
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(TorneioDialogComponent, {
      width: '400px',
      data:{
        nomeTorneio:'',
        premiacao: '0',
        totalGrupo: 0,
        totalParticipantes: 0,
        dataInicio: null,
        dataFim: null
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  getById(){
    this._torneioService.getById().subscribe((response: any) =>{
      this.newTorneio = response;
      if(this.newTorneio.id > 0) {this.idTorneio = true;}
    });
  }

  salvar(){
    debugger
    this._torneioService.updateTorneio(this.newTorneio).subscribe((response: any) =>{
      console.log('Post created successfully!');
      console.log(this.newTorneio);
    });
    window.location.reload();

  }

}
