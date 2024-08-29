import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BrowserQRCodeReader } from '@zxing/browser';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
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
    public bandera: boolean  = true

    @Input()
    previewFitMode: 'fill' | 'contain' | 'cover' | 'scale-down' | 'none' = 'cover';
    selectedDevice: MediaDeviceInfo;
  //@ViewChild(QrScannerComponent, {static:false}) qrScannerComponent: QrScannerComponent ;

  codeReader!: BrowserQRCodeReader;

  ngAfterViewInit(){
    $.getScript('./assets/plugins/select2/select2.min.js');
    $.getScript('./assets/js/custom-select2.js');
    
  }
  ngOnInit(): void {
    
  }
  
  getAvailableDevices(): void {
    const codeReader = new ZXingScannerComponent();
    codeReader.updateVideoInputDevices().then((devices) => {
      if (devices && devices.length > 0) {
        this.selectedDevice = devices[0]; // Seleccionar la primera cámara disponible
      }
    });
  }
  handleQrCodeResult(resultString: string) {
    console.log('Escaneado: ', resultString);
    // Aquí puedes procesar el resultado
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
