import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QRCodeScanner } from 'qr-code-scanner';

@Component({
  selector: 'app-movimiento-almacen',
  templateUrl: './movimiento-almacen.component.html',
  styleUrls: ['./movimiento-almacen.component.scss']
})
export class MovimientoAlmacenComponent implements OnInit {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  result: string;
  scanner: QRCodeScanner;

  ngOnInit(): void {
    this.scanner = new QRCodeScanner();
  }

  startScan() {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(stream => {
        this.video.nativeElement.srcObject = stream;
        this.scanner.scan(this.video.nativeElement)
          .then(result => {
            this.result = result;
            console.log('QR Code Result:', result);
            stream.getTracks().forEach(track => track.stop()); // Detener la cámara después de escanear
          })
          .catch(err => {
            console.error('QR Code Scan Error:', err);
            stream.getTracks().forEach(track => track.stop()); // Detener la cámara en caso de error
          });
      })
      .catch(err => console.error('Error accessing camera:', err));
  }
}
