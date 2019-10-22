import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/parent/title/title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import {RouterModule, Routes} from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { SelectedComponent } from './components/parent/selected/selected.component';

const routes: Routes = [
  {path: '', redirectTo: '/parent', pathMatch: 'full'},
  {path: 'parent', component: ParentComponent},
  {path: 'films', component: TitleComponent},
  {path: 'details', component: DetailViewComponent}
  ]
;
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DetailViewComponent,
    ParentComponent,
    SelectedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
