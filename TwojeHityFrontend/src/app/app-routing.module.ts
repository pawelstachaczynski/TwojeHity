import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewSongComponent } from './user-panel/add-new-song/add-new-song.component';
import { BrowseAllComponent } from './user-panel/browse-all/browse-all.component';
import { LoginComponent } from './user-panel/login/login.component';
import { UserPanelMainPageComponent } from './user-panel/user-panel-main-page/user-panel-main-page.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { YourFavoriteComponent } from './user-panel/your-favorite/your-favorite.component';

const routes: Routes = [
  {
    path: '', component: UserPanelComponent, children: [
      {path: '', component: UserPanelMainPageComponent},
      {path: 'login', component: LoginComponent},
      {path: 'all', component: BrowseAllComponent},
      {path: 'add-new-song', component: AddNewSongComponent},
      {path: 'your-favorite', component: YourFavoriteComponent}
    ]
  }
];
//
@NgModule({
  imports: [RouterModule.forRoot(routes), AppRoutingModule],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
