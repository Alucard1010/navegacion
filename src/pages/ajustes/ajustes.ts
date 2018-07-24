import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';//se debe llama el mopdulo ModalController para utilizar el modal

import { ModalPage } from "../index.paginas";

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) { }//se crea modalCtrl

  activarPrincipal() {

    this.navCtrl.parent.select(2);//este metodo es para darle atras y que me deje en el tab principal por eso el 2 recuerden que los tab son en base 0

  }

  mostrar_modal() {

    let modal = this.modalCtrl.create(ModalPage, { nombre: "Jonathan", edad: 30 });//se llama al modalCtrl para poder llamar a 
    //nuestra pagina modal  tambien se le pueden enviar parametros bien sea tanto dentro como crearlos despues del export class AjustesPage
    modal.present();//el present() es para llamar esa funcion osea el modal

    modal.onDidDismiss(parametros => {
      if (parametros) {
        console.log("Data del modal:");
        console.log(parametros);
      }else{
        console.log("Se cerro el modal sin parametros");
      }

    })

  }


}
