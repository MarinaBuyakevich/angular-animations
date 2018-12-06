import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { MatCardModule, MatButtonModule, MatToolbarModule } from '@angular/material';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { PageComponent } from './page/page.component';
  import {NoopAnimationsModule} from '@angular/platform-browser/animations';
  import {MatCheckboxModule} from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    NoopAnimationsModule,
    MatCheckboxModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent, PageComponent]
})
export class AppModule  { }
// export class PizzaPartyAppModule { }
// export class MyOwnCustomMaterialModule { }
