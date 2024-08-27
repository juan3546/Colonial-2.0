import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BrowserQRCodeReader } from '@zxing/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movimiento-almacen',
  templateUrl: './movimiento-almacen.component.html',
  styleUrls: ['./movimiento-almacen.component.scss']
})
export class MovimientoAlmacenComponent implements OnInit {
  public Ruta:any;
    public intAcceso:any;
    public verImg: any;

    @Input()
    previewFitMode: 'fill' | 'contain' | 'cover' | 'scale-down' | 'none' = 'cover';
  
  //@ViewChild(QrScannerComponent, {static:false}) qrScannerComponent: QrScannerComponent ;

  codeReader!: BrowserQRCodeReader;

  ngAfterViewInit(){
    $.getScript('./assets/plugins/select2/select2.min.js');
    $.getScript('./assets/js/custom-select2.js');
    
  }
  ngOnInit(): void {
    this.codeReader = new BrowserQRCodeReader();
  }

  scanQR() {
    this.verImg = false;
    const previewElem = document.querySelector('#preview') as HTMLVideoElement;
    const canvasElem = document.querySelector('#canvas') as HTMLCanvasElement;
  
    // Verificar si navigator.mediaDevices está disponible
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
          previewElem.srcObject = stream;
          previewElem.setAttribute('playsinline', 'true');
          previewElem.play();
  
          // Intentar decodificar el código QR desde el stream de video
          this.codeReader.decodeOnceFromVideoDevice(undefined, previewElem)
            .then(result => {
              // Código QR escaneado correctamente
              this.Ruta = result;
  
              const context = canvasElem.getContext('2d');
              canvasElem.height = previewElem.videoHeight;
              canvasElem.width = previewElem.videoWidth;
              context?.drawImage(previewElem, 0, 0, canvasElem.width, canvasElem.height);
  
              const imageData = context?.getImageData(0, 0, canvasElem.width, canvasElem.height);
  
              // Lógica adicional dependiendo del valor escaneado
              if (this.intAcceso === '') {
                window.location.href = 'https://ecodeli-industrial.com/Industrial/';
              } else {
                let intidEdificioAreas = this.Ruta.text.split('check/');
               // this.router.navigate(['/v2/check', intidEdificioAreas[1]]);
              }
            })
            .catch(error => console.error('Error al escanear código QR:', error));
        })
        .catch(error => console.error('Error al acceder a la cámara:', error));
    } else {
      console.error('navigator.mediaDevices.getUserMedia no está disponible en este navegador.');
    }
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
