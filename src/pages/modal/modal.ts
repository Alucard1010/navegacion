import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre: string = "";
  edad: number = 0;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {

    this.nombre = this.navParams.get("nombre");//se llaman las variables que van a tomar el valor enviado desde los ajustes en este caso es nombre jonathan
    this.edad = this.navParams.get("edad");//se llaman las variables que van a tomar el valor enviado desde los ajustes en este caso es edad 30

    console.log(this.nombre, this.edad);

  }

  cerrar_con_parametros() {//para cerrar el modal no se con el pop ya que no fue creado con el navParams hay que hacerlo con  el ViewController
    
    let data = {
      nombre: "Chimuelo",
      edad: "21",
      coords: {
        lat: 10,
        lng: -10
      }

    }

    this.viewCtrl.dismiss(data);//si queremos cerrarlo y enviar parametros a la pagina anterior se hace con dismiss 

  }

  cerrar_sin_parametros() {

    this.viewCtrl.dismiss();

  }


}
