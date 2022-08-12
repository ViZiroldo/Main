import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient) { }

  getTimes(){

    const apiUrl = `${environment.apiUrl}/api/Time/ListTime`;
    return this.http.get(apiUrl);
  }

  deletetTimes(){

    const apiUrl = `${environment.apiUrl}/api/ListTime`;
    return this.http.get(apiUrl);
  }

  updatetTimes(){

    const apiUrl = `${environment.apiUrl}/api/ListTime`;
    return this.http.get(apiUrl);
  }
}
