import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovimientoAlmacenComponent } from './movimiento-almacen/movimiento-almacen.component';
import { VenderDevolverComponent } from './vender-devolver/vender-devolver.component';
import { RepararComponent } from './reparar/reparar.component';
import { ImprimirCajasComponent } from './imprimir-cajas/imprimir-cajas.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'movimiento_almacen',
        component: MovimientoAlmacenComponent,
        data: {
          title: 'Movimiento Almacen'
        }
      },
      {
        path: 'vender_devolver',
        component: VenderDevolverComponent,
        data: {
          title: 'Vender / Devolver'
        }
      },
      {
        path: 'reparar',
        component: RepararComponent,
        data: {
          title: 'Reparar'
        }
      },
      {
        path: 'imprimir_cajas',
        component: ImprimirCajasComponent,
        data: {
          title: 'Imprimir Cajas'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovilRoutingModule { }
