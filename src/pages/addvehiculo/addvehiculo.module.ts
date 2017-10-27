import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddvehiculoPage } from './addvehiculo';
import { ModalController } from 'ionic-angular';


@NgModule({
  declarations: [
    AddvehiculoPage,
    ModalController,
  ],
  imports: [
    IonicPageModule.forChild(AddvehiculoPage),
  ],
})
export class AddvehiculoPageModule {}
