import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vender-devolver',
  templateUrl: './vender-devolver.component.html',
  styleUrls: ['./vender-devolver.component.scss']
})
export class VenderDevolverComponent implements OnInit {

  constructor() { }

  today: string;

  ngOnInit(): void {
//fecha de hoy para venta
    const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0]; // Formato: YYYY-MM-DD
  }

}
