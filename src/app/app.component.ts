import { Component } from '@angular/core';
import { Dataset } from './dataset';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StatClient';

  selectedDataset?:Dataset;

  selectDataset(dataset: Dataset){
    this.selectedDataset = dataset;
  }
}
