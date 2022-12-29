import { Injectable } from '@angular/core';
import { Dataset } from '../model/dataset';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  datasets=[
    {
      lastUpdated:786414995,
      name:"mock dataset 1",
      recordCount:758342
    },
    {
      lastUpdated:1661721635,
      name:"mock dataset 2",
      recordCount:5567521
    },
  ]

  constructor() { }

  getDatasets(): Dataset[] {
    return this.datasets;
  }

}
