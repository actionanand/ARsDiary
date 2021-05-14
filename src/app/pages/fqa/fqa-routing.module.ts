import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FqaComponent } from './fqa.component';

const routes: Routes = [{ path: '', component: FqaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FqaRoutingModule { }
