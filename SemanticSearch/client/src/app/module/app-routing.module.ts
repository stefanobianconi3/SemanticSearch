import { FileviewComponent } from './../components/fileview/fileview.component';
import { SearchbarComponent } from './../components/searchbar/searchbar.component';
import { WelcomeComponent } from './../components/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path:'homepage',
    component: SearchbarComponent
  },
  {
    path:'prova',
    component: FileviewComponent
  }


];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
