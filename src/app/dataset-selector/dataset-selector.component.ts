import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Dataset } from "../model/dataset";
import { DatasetService } from '../services/dataset.service';

@Component({
  selector: 'app-dataset-selector',
  templateUrl: './dataset-selector.component.html',
  styleUrls: ['./dataset-selector.component.css']
})
export class DatasetSelectorComponent implements OnInit {

  @Output() selectedDatasetEvent: EventEmitter<Dataset> = new EventEmitter<Dataset>(true);
  datasets: Dataset[] = [];
  selectedDataset?: Dataset;

  constructor(private datasetService: DatasetService) {}

  ngOnInit(): void { 
    this.getDatasets();
  }

  getDatasets(): void {
    this.datasetService.getDatasets().subscribe(datasets => this.datasets = datasets);
  }

  onDatasetSelect(dataset: Dataset): void {
    this.selectedDatasetEvent.emit(dataset);
    this.selectedDataset=dataset;
  }

}
