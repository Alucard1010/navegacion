import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { Pagina2Page } from "../index.paginas";


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  pagina2:any = Pagina2Page;//esta variable se utiliza en el segundo metodo para navegar a la pagina 2 osea sin el evento click

  constructor(public navCtrl: NavController) {}


  navegarPagina(){

    this.navCtrl.push( Pagina2Page );//con esta sentencia navegamos a la pagina 2

  }

  
}
