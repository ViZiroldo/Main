import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { TorneioModel } from "../models/TorneioModel";

@Injectable({
  providedIn: 'root'
})
export class TorneioService {

  constructor(private http: HttpClient) { }

  getTorneio(): Observable<TorneioModel>{
    const apiUrl = `${environment.apiUrl}/api/Torneio/ListTorneio`;
    return this.http.get<TorneioModel>(apiUrl);
  }

  getById(): Observable<TorneioModel>{
    const apiUrl = `${environment.apiUrl}/api/Torneio/GetById/`+ 9;
    return this.http.get<TorneioModel>(apiUrl);
  }

  updateTorneio(result: TorneioModel): Observable<TorneioModel>{
    debugger
    const apiUrl = `${environment.apiUrl}/api/Torneio/UpdateTorneio` ;
    return this.http.post<TorneioModel>(apiUrl, result);
  }

  addTorneio(result: any): Observable<any>{
    debugger
    const apiUrl = `${environment.apiUrl}/api/Torneio/AddTorneio`;
    return this.http.post<any>(apiUrl,result);
  }
}
