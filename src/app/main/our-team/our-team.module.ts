import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamComponent } from './our-team.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'our-team',
    component: OurTeamComponent
  },
  {
    path: '',
    component: OurTeamComponent
  },
];

@NgModule({
  declarations: [OurTeamComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class OurTeamModule { }
