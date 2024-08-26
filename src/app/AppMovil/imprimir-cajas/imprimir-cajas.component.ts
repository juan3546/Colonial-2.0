import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { QRCodeScanner } from 'qr-code-scanner';

@Component({
  selector: 'app-imprimir-cajas',
  templateUrl: './imprimir-cajas.component.html',
  styleUrls: ['./imprimir-cajas.component.scss']
})
export class ImprimirCajasComponent implements OnInit {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  
  scanner: QRCodeScanner;
  
  result: string | null = null;
  stream: MediaStream | null = null;

  constructor() { }

  ngAfterViewInit(){
    this.scanner = new QRCodeScanner();
    $.getScript('./assets/plugins/select2/select2.min.js');
    $.getScript('./assets/js/custom-select2.js');
    
  }

  ngOnInit(): void {
  }

//Escanear
  startScan() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
          this.stream = stream;
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play(); // Asegúrate de que el video comience a reproducirse

          this.scanner.scan(this.video.nativeElement)
            .then(result => {
              this.result = result;
              console.log('QR Code Result:', result);
              this.stopScan(); // Detener la cámara después de escanear
            })
            .catch(err => {
              console.error('QR Code Scan Error:', err);
              this.stopScan(); // Detener la cámara en caso de error
            });
        })
        .catch(err => console.error('Error accessing camera:', err));
    } else {
      console.error('getUserMedia no es soportado por este navegador.');
    }
  }

  stopScan() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop()); // Detener la cámara
      this.stream = null;
    }
  }

  ngOnDestroy() {
    this.stopScan(); // Asegúrate de detener la cámara al destruir el componente
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
