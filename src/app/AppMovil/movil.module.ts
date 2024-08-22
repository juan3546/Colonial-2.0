import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImprimirCajasComponent } from './imprimir-cajas/imprimir-cajas.component';
import { MovimientoAlmacenComponent } from './movimiento-almacen/movimiento-almacen.component';
import { RepararComponent } from './reparar/reparar.component';
import { VenderDevolverComponent } from './vender-devolver/vender-devolver.component';
import { MovilRoutingModule } from './movil-routing.module';

 

@NgModule({
  declarations: [
    ImprimirCajasComponent,
    MovimientoAlmacenComponent,
    RepararComponent,
    VenderDevolverComponent
  ],
  imports: [
    CommonModule,
    MovilRoutingModule
  ]
})
export class MovilModule { }
