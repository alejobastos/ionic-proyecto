import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Vehiculo } from '../../app/interfaces/vehiculo.interface';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  headers: Headers;
  headersPost: Headers;
  options: RequestOptions;

  constructor(private http: Http, public alertCtrl: AlertController) {
    console.log('Hello ServiceProvider Provider');
  }

 CargarVehiculo() {  
       
  this.headersPost = new Headers({
    'Content-Type':'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin':'*',
    'user':'1',
    'passwd':'admin'
  });

  let optionspost = new RequestOptions({
    headers: this.headersPost
  })

  return this.http.get('http://192.168.1.50:8080/monitoreo/webresources/co.edu.monitoreo.entidades.vehiculo', optionspost).map(res => res.json());
 }

 guardarVehiculo(placa:string, caracteristicas:string, estado:string){   
  
  this.headersPost = new Headers({
    'Content-Type':'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin':'*',
    'user':'1',
    'passwd':'admin'
  });

  let optionspost = new RequestOptions({
    headers: this.headersPost
  })

  const usuarioJson = { codusua: '1',
    contrasena: 'admin',
    direccion: 'cra 10',
    email: 'daniel@hotmail.com',
    nombre: 'daniel',
    regisTelef: '31' };

  const body = {
    caracteristicas: caracteristicas,
    codvehi: 3,
    fkCodusua : usuarioJson,
    placa: placa,
    };

  console.log(body)

  this.http.post('http://192.168.1.50:8080/monitoreo/webresources/co.edu.monitoreo.entidades.vehiculo',body,optionspost).subscribe(data => {
      
      let alert = this.alertCtrl.create({
        title: 'Vehiculo Creado!',
        subTitle: 'Usted ha Creado un vehiculo con Exito!',
        buttons: ['Aceptar']
      });
      alert.present();  

  this.CargarVehiculo();

  });
}   

eliminarVehiculo(placa:string){   
  
  this.headersPost = new Headers({
    'Content-Type':'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin':'*',
    'user':'1',
    'passwd':'admin'
  });

  let optionspost = new RequestOptions({
    headers: this.headersPost
  })


  const body = {
    placa: placa
    };

  console.log(body)

  this.http.put('http://192.168.1.50:8080/monitoreo/webresources/co.edu.monitoreo.entidades.vehiculo',body,optionspost).subscribe(data => {
      
      let alert = this.alertCtrl.create({
        title: 'Vehiculo Eliminado!',
        subTitle: 'Usted ha Eliminado un vehiculo con Exito!',
        buttons: ['Aceptar']
      });
      alert.present();  

  this.CargarVehiculo();

  });
}   

}
