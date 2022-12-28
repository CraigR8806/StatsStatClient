import { Injectable } from '@angular/core';
import { Dataset } from './dataset';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  datasets=[
    {
      lastUpdated:new Date(),
      name:"mock dataset 1",
      recordCount:758342
    },
    {
      lastUpdated:new Date(),
      name:"mock dataset 2",
      recordCount:5567521
    },
  ]

  constructor() { }

  getDatasets(): Dataset[] {
    return this.datasets;
  }

}
