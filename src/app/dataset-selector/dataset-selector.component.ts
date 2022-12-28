import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatasetService } from '../dataset.service';
import { Dataset } from '../dataset';

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
    this.datasets = this.datasetService.getDatasets();
  }

  onDatasetSelect(dataset: Dataset): void {
    this.selectedDatasetEvent.emit(dataset);
    this.selectedDataset=dataset;
  }

}
