import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SettingsComponent } from './user/settings/settings.component';
import { ArticleComponent } from './articles/article/article.component';
import { EditorComponent } from './articles/editor/editor.component';
import { ProfileFavoriteComponent } from './user/profile-favorite/profile-favorite.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'profile/:username/favorites', component: ProfileFavoriteComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'editor/:id', component: EditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
