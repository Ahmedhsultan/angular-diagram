import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Civil3dComponent } from './civil3d/civil3d.component';
import { AveplanComponent } from './aveplan/aveplan.component';
import { AutocadComponent } from './autocad/autocad.component';
import { RouterModule } from '@angular/router';
import { SurfacesComponent } from './civil3d/surfaces/surfaces.component';


const routes = [
  {
    path: 'civil3d',
    component: Civil3dComponent,
  },
  {
    path: 'autocad',
    component: AutocadComponent,
  },
  {
    path: 'aveplan',
    component: AveplanComponent
  },
  {
    path: '',
    component: Civil3dComponent
  },
];


@NgModule({
  declarations: [
    Civil3dComponent,
    AveplanComponent,
    AutocadComponent,
    SurfacesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TransToolsModule { }
