import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-panel/login/login.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

const routes: Routes = [
  {
    path: '', component: UserPanelComponent, children: [
      {path: 'login', component: LoginComponent},
    ]
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
