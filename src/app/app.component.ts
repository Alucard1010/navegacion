import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage, Ajustes2Page } from "../pages/index.paginas";//se cambia de PrincipalPage a TabsPage para que inicie con los tabs
//se importa ajustes2 para el video 34 de menus laterales 


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabs = TabsPage;//creamos una variable que contendra la pagina tabs video 34
  ajustes2 = Ajustes2Page;//creamos una variable que contendra la pagina ajustes2 video 34

  rootPage: any = TabsPage;// aqui tambien se cambia por TabsPage para que tome los tabs

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  abrirPagina(pagina: any) {

    this.rootPage = pagina;//le decimos al rootpage que cambia al valor que tiene la variable de pagina que trae la funcion del video 34

  }



}

