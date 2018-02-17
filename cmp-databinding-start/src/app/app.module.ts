import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { HistoryComponent } from './history/history.component';
import {HttpModule} from '@angular/http'
import{FormsModule} from '@angular/forms';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { EdituserComponent } from './edituser/edituser.component'

const routes:Routes=[
{path:'info',component:InfoComponent},
{path:'',component:HomeComponent},
{path:'data',component:DataComponent},
{path:'history',component:HistoryComponent},
{path:'Viewcontrol/:id/:fname/:lname/:age/:email/:password',component:ViewuserComponent},
{path:'Edituser/:id/:fname/:lname/:age/:email/:password',component:EdituserComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    HomeComponent,
    DataComponent,
    HistoryComponent,
    ViewuserComponent,
    EdituserComponent,  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
