import { Component, Input, OnInit } from '@angular/core';
import { Dataset } from '../dataset';

@Component({
  selector: 'app-dataset-details',
  templateUrl: './dataset-details.component.html',
  styleUrls: ['./dataset-details.component.css']
})
export class DatasetDetailsComponent implements OnInit {


  @Input() dataset?: Dataset;

  constructor(){ }

  ngOnInit(): void { }

}
