import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import { LoginServicesProvider } from '../providers/login-services/login-services';
import { Vehiculo } from '../app/interfaces/vehiculo.interface';
import { ServiceProvider } from '../providers/service/service';
import { AddvehiculoPage } from "../pages/addvehiculo/addvehiculo";
import { ModalController } from 'ionic-angular';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AddvehiculoPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AddvehiculoPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServicesProvider,
    ServiceProvider
  ]
})
export class AppModule {}
