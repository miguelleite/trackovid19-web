import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeStateComponent } from './screens/change-state/change-state.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { MainComponent } from './screens/main/main.component';
import { PostCodeComponent } from './screens/post-code/post-code.component';
import { SharedModule } from './shared/shared.module';
import { GeolocalizationService } from './shared/services/geolocalization.service';
import { HttpClientModule } from '@angular/common/http';
import { OnBoardingModule } from './screens/onboarding/onboarding.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ChangeStateComponent,
    MainComponent,
    PostCodeComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    FlexLayoutModule,
    OnBoardingModule,
    SharedModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    
  ],
  providers: [
    // GeolocalizationService,
    { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: environment.apiUrl }}
  ],
  bootstrap: [AppComponent]

})
export class AppModule {}
