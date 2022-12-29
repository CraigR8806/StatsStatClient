import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DatasetDetailsComponent } from './dataset-details/dataset-details.component';
import { DatasetSelectorComponent } from './dataset-selector/dataset-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    DatasetSelectorComponent,
    DatasetDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
