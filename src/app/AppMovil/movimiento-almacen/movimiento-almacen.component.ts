import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QRCodeScanner } from 'qr-code-scanner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movimiento-almacen',
  templateUrl: './movimiento-almacen.component.html',
  styleUrls: ['./movimiento-almacen.component.scss']
})
export class MovimientoAlmacenComponent implements OnInit {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  
  scanner: QRCodeScanner;
  
  result: string | null = null;
  stream: MediaStream | null = null;

  ngAfterViewInit(){
    this.scanner = new QRCodeScanner();
    $.getScript('./assets/plugins/select2/select2.min.js');
    $.getScript('./assets/js/custom-select2.js');
    
  }
  ngOnInit(): void {
  
  }

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


  mostrarAlerta(tipo: string) {
    switch (tipo) {
      case 'success':
        Swal.fire({
          title: "Realizar movimiento",
          text: "Movimiento realizado",
          icon: "success"
        });
        break;
      case 'error':
        Swal.fire({
          title: "Realizar movimiento",
          text: "Movimiento no realizado",
          icon: "error"
        });
        break;
      case 'info':
        Swal.fire({
          title: "Realizar movimiento",
          text: "Movimiento no realizado",
          icon: "info"
        });
        break;
      case 'warning':
        Swal.fire({
          title: "Realizar movimiento",
          text: "Movimiento no realizado",
          icon: "warning"
        });
        break;
      case 'question':
        Swal.fire({
          title: "Realizar movimiento",
          text: "Movimiento no realizado",
          icon: "question"
        });
        break;
      default:
        Swal.fire({
          title: "Realizar movimiento",
          text: "Opción desconocida",
          icon: "warning"
        });
        break;
    }
  }
  

}
