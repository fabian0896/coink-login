import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoGuard } from '../guards/info.guard';

import { InfoPage } from './info.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPage,
    canActivate: [InfoGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPageRoutingModule {}
