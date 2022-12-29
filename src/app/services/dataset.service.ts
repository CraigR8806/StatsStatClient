import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dataset } from '../model/dataset';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor(private http: HttpClient) { }

  getDatasets(): Observable<Dataset[]> {
    return this.http.get<Dataset[]>("http://localhost:8080/statsstat/catalog/datasets");
  }

}
