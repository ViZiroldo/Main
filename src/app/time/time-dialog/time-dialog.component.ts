import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, Input, ViewChild  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TimeModel } from 'src/app/models/TimeModel';
import { TimeService } from 'src/app/services/time.service';
import { TimeComponent } from '../time.component';

@Component({
  selector: 'app-time-dialog',
  templateUrl: './time-dialog.component.html',
  styleUrls: ['./time-dialog.component.css']
})
export class TimeDialogComponent implements OnInit {
  timeDialog!: TimeModel;
  isCriar!: boolean;
  time!: TimeModel;
  displayedColumns: string[] = ['id', 'nome', 'funcao', 'idade', 'action'];
  form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    ativo: new FormControl(true, [Validators.required]),
    dataCadastro : new FormControl(null),
    dataAlteracao : new FormControl(null),
    userId: new FormControl('')
  });

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {isCriar: boolean, idTime: number},
    public dialogRef: MatDialogRef<TimeDialogComponent>,
    private _timeService: TimeService,
    public datepipe: DatePipe
   ) {}

  @ViewChild(TimeComponent, {static: false})
  filho!: TimeComponent;

  ngOnInit(): void {
    this.isCriar = this.data.isCriar;
    this.getById();

  }

  onCancel(): void {
    this.dialogRef.close();
  }

  get f(){
    return this.form.controls;
  }

  add(){
    this._timeService.addTime(this.form.value).subscribe((response: any) =>{
      console.log('Post created successfully!');
    });
    window.location.reload();
  }

  salvar(){
    this._timeService.updateTimes(this.time).subscribe((response: any) =>{
      console.log('Post created successfully!');
    });
    window.location.reload();
  }

  getById(){
    this._timeService.getById(this.data.idTime).subscribe((response: any) =>{
      this.time = response;
    });
  }
}
