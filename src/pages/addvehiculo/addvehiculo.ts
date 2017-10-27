import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import{ AddvehiculoPageModule }from './addvehiculo.module';
import { Vehiculo } from '../../app/interfaces/vehiculo.interface';
import { ServiceProvider } from "../../providers/service/service";




/**
 * Generated class for the AddvehiculoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addvehiculo',
  templateUrl: 'addvehiculo.html',
})
export class AddvehiculoPage {

  vehiculo:Vehiculo [] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, private Service:ServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddvehiculoPage');
  }

  ngOnInit() {
    //this.viajero = new Viajero("","","","","");    
  }
  
  agregarVehiculo() {
    let modal = this.modalCtrl.create(AddvehiculoPageModule );
    modal.present();
  }

  guardarvehiculo(){            
    this.Service.guardarVehiculo(this.vehiculo);
    
  }

}
