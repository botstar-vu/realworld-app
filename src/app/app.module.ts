import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SettingsComponent } from './user/settings/settings.component';
import { ArticleComponent } from './articles/article/article.component';
import { EditorComponent } from './articles/editor/editor.component';
import { ProfileFavoriteComponent } from './user/profile-favorite/profile-favorite.component';
import { ErrorPanelComponent } from './shared/error-panel/error-panel.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticlePreviewComponent } from './articles/article-preview/article-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SettingsComponent,
    ArticleComponent,
    EditorComponent,
    ProfileFavoriteComponent,
    ErrorPanelComponent,
    ArticleListComponent,
    ArticlePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
