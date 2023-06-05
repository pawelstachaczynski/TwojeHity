import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { LoginComponent } from './user-panel/login/login.component';
import { UserNavigationComponent } from './user-panel/user-navigation/user-navigation.component';
import { UserPanelMainPageComponent } from './user-panel/user-panel-main-page/user-panel-main-page.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { IndicatorsModule } from "@progress/kendo-angular-indicators";
import { AuthService } from './services/auth.service';
import { AlertService } from './services/app-services/alert.service';
import { HttpClient, HttpClientModule, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigStore } from './app-config/config-store';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpErrorInterceptorService } from './services/interceptors/http-error-interceptor.service';
import { BrowseAllComponent } from './user-panel/browse-all/browse-all.component'; 

@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    LoginComponent,
    UserNavigationComponent,
    UserPanelMainPageComponent,
    SpinnerComponent,
    BrowseAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    GridModule,
    BrowserAnimationsModule,
    IndicatorsModule,
    ReactiveFormsModule,
    ButtonsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    HttpClientModule
  ],
  providers: [AuthService, AlertService, HttpClient, ConfigStore, {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
