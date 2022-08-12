import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { TimeModel } from "../models/TimeModel";

@Injectable({providedIn:'root'})
export class TimeService{

  constructor(private http: HttpClient) { }

  getTimes(): Observable<TimeModel>{
    const apiUrl = `${environment.apiUrl}/api/Time/ListTime`;
    return this.http.get<TimeModel>(apiUrl);
  }

  getById(id: number): Observable<TimeModel>{
    const apiUrl = `${environment.apiUrl}/api/Time/GetTimeById/` + id;
    return this.http.get<TimeModel>(apiUrl);
  }

  deleteTimes(id: number): Observable<TimeModel>{

    const apiUrl = `${environment.apiUrl}/api/Time/DeleteTime/` + id;
    return this.http.post<TimeModel>(apiUrl, id);
  }

  updateTimes(time: TimeModel): Observable<TimeModel>{

    const apiUrl = `${environment.apiUrl}/api/Time/UpdateTime`;
    return this.http.post<TimeModel>(apiUrl, time);
  }

  addTime(time: any): Observable<any>{
    debugger
    const apiUrl = `${environment.apiUrl}/api/Time/AddTime`;
    return this.http.post<any>(apiUrl,time);
  }
}
