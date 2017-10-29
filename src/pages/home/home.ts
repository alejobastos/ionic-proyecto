import { Component, OnInit } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Vehiculo } from "../../app/interfaces/vehiculo.interface";
import { ServiceProvider } from "../../providers/service/service";
import { Refresher } from "ionic-angular";
import { AddvehiculoPage } from "../addvehiculo/addvehiculo";
import { ModalController, LoadingController, AlertController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  vehiculoList:Array<Vehiculo>;
  loading: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public Service:ServiceProvider, public modalCtrl: ModalController) {
    this.loading = this.loadingCtrl.create({
      content: '<ion-spinner></ion-spinner>'
    });
    
    this.getData();
  }

  getData(){
    
    this.loading.present();
    this.Service.CargarVehiculo().subscribe(
      result => {
        this.vehiculoList = result;
        console.log("success: " + this.vehiculoList);
      },
      err => {
        console.error("Error: " + err);
      },
      () => {
        this.loading.dismiss();
        console.log("getData Completed!");
      }
    );
  }

  recargar_vehiculo(refresher:Refresher)
  {
    console.log("Inicio del refresh");
    setTimeout(()=>{
      console.log("Terminó el refresh");
      this.Service.CargarVehiculo(); 
      this.Service.CargarVehiculo().subscribe(
        result => {
          this.vehiculoList = result;
        },
        err => {},
        () => {}
      );
      refresher.complete();
    }, 1500)
  }

  borrar_vehiculo(idx:number){
    this.vehiculoList.splice(idx, 1);
  }

  agregarVehiculo() {
    let modal = this.modalCtrl.create(AddvehiculoPage);
    modal.present();
  }

  eliminarVehiculo(placa: string) {

    const alert = this.alertCtrl.create({
      title: 'Eliminar Vehiculo',
      message: 'Desea eliminar el vehiculo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.Service.eliminarVehiculo(placa);
          }
        }
      ]
    });
    alert.present();
  }
  
  }

