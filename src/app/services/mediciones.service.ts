import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicionesService {
  constructor(private _http: HttpClient) { }


  getMediciones(id: number): Promise<Array<any>>{
    return this._http.get<any[]>("http://127.0.0.1:5001/daiot-lo/us-central1/getMedicionesDeviceID" + '/?idDevice='+ encodeURIComponent( JSON.stringify(id)))
       .pipe(map((result: any) => result)).toPromise();
  }
}
