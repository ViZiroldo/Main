import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TorneioModel } from 'src/app/models/TorneioModel';
import { TorneioService } from 'src/app/services/torneio.service';


@Component({
  selector: 'app-torneio-dialog',
  templateUrl: './torneio-dialog.component.html',
  styleUrls: ['./torneio-dialog.component.css']
})
export class TorneioDialogComponent implements OnInit {

  form = new FormGroup({
    nomeTorneio: new FormControl('', [Validators.required]),
    ativo: new FormControl(true, [Validators.required]),
    premiacao: new FormControl(0, [Validators.required]),
    totalGrupo: new FormControl(0, [Validators.required]),
    totalParticipantes: new FormControl(0, [Validators.required]),
    dataInicio: new FormControl('', [Validators.required]),
    dataFim: new FormControl('', [Validators.required]),
    dataCadastro : new FormControl(null),
    dataAlteracao : new FormControl(null),
    userId: new FormControl('')
  });

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogRef: MatDialogRef<TorneioDialogComponent>,
    private _torneioService: TorneioService,
    public datepipe: DatePipe
   ) {}

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  get f(){
    return this.form.controls;
  }

  add(){
      this._torneioService.addTorneio(this.form.value).subscribe((response: any) =>{
          console.log('Post created successfully!');
      });
      window.location.reload();
  }
}
