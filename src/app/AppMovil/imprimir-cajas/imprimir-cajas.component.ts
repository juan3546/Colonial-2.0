import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-imprimir-cajas',
  templateUrl: './imprimir-cajas.component.html',
  styleUrls: ['./imprimir-cajas.component.scss']
})
export class ImprimirCajasComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
/*
  mostrarAlerta() {
    const steps = ['1', '2', '3'];
    const swalQueueStep = Swal.mixin({
      progressSteps: steps,
      confirmButtonText: 'Siguiente &rarr;',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
      input: 'text'
    });

    let stepValues = [];

    swalQueueStep.fire({
      title: 'Paso 1',
      text: 'Introduce tu nombre:',
      input: 'text',
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage('Este campo es obligatorio');
        } else {
          stepValues.push(value);
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Paso 2
        swalQueueStep.fire({
          title: 'Paso 2',
          text: 'Introduce tu correo:',
          input: 'email',
          preConfirm: (value) => {
            if (!value) {
              Swal.showValidationMessage('Este campo es obligatorio');
            } else {
              stepValues.push(value);
            }
          }
        }).then((result) => {
          if (result.isConfirmed) {
            // Paso 3
            swalQueueStep.fire({
              title: 'Paso 3',
              text: 'Introduce tu número de teléfono:',
              input: 'tel',
              preConfirm: (value) => {
                if (!value) {
                  Swal.showValidationMessage('Este campo es obligatorio');
                } else {
                  stepValues.push(value);
                }
              }
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: '¡Finalizado!',
                  html: `
                    <p>Nombre: ${stepValues[0]}</p>
                    <p>Correo: ${stepValues[1]}</p>
                    <p>Teléfono: ${stepValues[2]}</p>
                  `,
                  icon: 'success'
                });
              }
            });
          }
        });
      }
    });
  }
*/

///venta de pares


///fin venta de pares


}
