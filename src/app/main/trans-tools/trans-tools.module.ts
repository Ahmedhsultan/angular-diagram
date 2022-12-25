import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Civil3dComponent } from './civil3d/civil3d.component';
import { AveplanComponent } from './aveplan/aveplan.component';
import { AutocadComponent } from './autocad/autocad.component';
import { RouterModule } from '@angular/router';
import { SurfaceItemsComponent } from './civil3d/surfaces/surface-items/surface-items.component';
import { SurfacesComponent } from './surfaces/surfaces.component';
import { SurfacesItemComponent } from './surfaces/surfaces-item/surfaces-item.component';


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
    component: SurfacesComponent
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
    SurfacesComponent,
    SurfaceItemsComponent,
    SurfacesItemComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TransToolsModule { }
