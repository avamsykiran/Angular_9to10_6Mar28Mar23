import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutletFormComponent } from './outlet-form/outlet-form.component';
import { OutletsComponent } from './outlets/outlets.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/outlets'},
  {path:'outlets',component:OutletsComponent},
  {path:'addOutlet',component:OutletFormComponent},
  {path:'editOutlet/:id',component:OutletFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
