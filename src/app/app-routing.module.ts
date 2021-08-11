import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockDetailComponent } from './block-detail/block-detail.component';
import { BlocksComponent } from './blocks/blocks.component';

const routes: Routes = [
  {path: '', component: BlocksComponent},
  {path: 'block-detail/:height', component: BlockDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
