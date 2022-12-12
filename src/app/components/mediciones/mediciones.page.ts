import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicionesService } from '../../services/mediciones.service';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})
export class MedicionesPage implements OnInit {

  listadoMediciones: Array<any> = new Array<any>;
  public idDispositivo: number;
  constructor(private router:ActivatedRoute,
              private dMed:MedicionesService) {
              this.idDispositivo = Number(this.router.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    console.log("this.idDispositivo: ",this.idDispositivo)
    this.dMed.getMediciones(this.idDispositivo).then(listaMediciones=>{
      this.listadoMediciones=listaMediciones;
      console.log(listaMediciones)
    }).catch(err=>{
      console.error('Error al obtener mediciones del Dispositivo id:'+ this.idDispositivo);
    });
  }

}
