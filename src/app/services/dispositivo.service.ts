import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  constructor(private _http: HttpClient) { }

  getDispositivos(): Promise<Array<any>>{
    return this._http.get<any[]>("http://127.0.0.1:5001/daiot-lo/us-central1/getListaDispositivos")
       .pipe(map((result: any) => result)).toPromise();
  }
}
