import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-imprimir-cajas',
  templateUrl: './imprimir-cajas.component.html',
  styleUrls: ['./imprimir-cajas.component.scss']
})
export class ImprimirCajasComponent implements OnInit {


  mostrarAlerta() {
    Swal.fire({
      title: '¡Hola!',
      text: 'Esta es una alerta de SweetAlert2 desde CDN',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
