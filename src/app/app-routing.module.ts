import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { AboutFormComponent } from './components/about-form/about-form.component';
import { WorkFormComponent } from './components/work-form/work-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about-form',
    pathMatch: 'full',
  },
  {
    path: 'about-form',
    component: AboutFormComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'work-form',
    component: WorkFormComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
