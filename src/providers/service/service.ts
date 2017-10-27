import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../../app/interfaces/vehiculo.interface';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  vehiculoListService: Array<Vehiculo>

  constructor(private http: HttpClient, public alertCtrl: AlertController) {
    console.log('Hello ServiceProvider Provider');
  }

 CargarVehiculo() {  
       
    this.http.get('http://localhost:8080/tiquetesapp/webresources/entidades.viajero').subscribe(data => {
      // Read the result field from the JSON response.
      this.vehiculoListService = data as Array<Vehiculo>;
    });
 }

 guardarVehiculo(vehiculo:Vehiculo){   
  
const body = {
  placa: vehiculo.placa,
  caracteristica: vehiculo.caracteristicas,
  estado: vehiculo.estado,
 
  };

console.log(body)

this.http.post('http://localhost:8080/tiquetesapp/webresources/entidades.viajero',body).subscribe(data => {
    
    let alert = this.alertCtrl.create({
      title: 'Vehiculo Creado!',
      subTitle: 'Usted ha Creado un vehiculo con Exito!',
      buttons: ['Aceptar']
    });
    alert.present();  

this.CargarVehiculo();

});
}   

 /* loadViajeros() {        
    return this.http.get('http://localhost:8080/tiquetesapp/webresources/entidades.viajero/?results=25');
  }*/

}
