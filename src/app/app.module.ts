import { PageService } from './share/page.service';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NoopAnimationsModule,
    MaterialModule,

  ],
  providers: [
    PageService,
    {provide: MAT_DATE_LOCALE, useValue: 'th-TH'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
