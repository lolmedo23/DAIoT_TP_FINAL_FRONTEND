import { Component } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listadoDispositivos: Array<any> = new Array<any>;

  constructor(public dispositivoServ:DispositivoService) {
  }
  ngOnInit()
  {
    this.dispositivoServ.getDispositivos().then(lst=>{
      this.listadoDispositivos=lst;
    })
    .catch(err=>{
      console.error('Error al obtener lista de dispositivos');
    });
  }
}
