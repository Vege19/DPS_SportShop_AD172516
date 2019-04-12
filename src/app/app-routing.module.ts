import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'productodetalle/:id', loadChildren: './productodetalle/productodetalle.module#ProductodetallePageModule' },
  { path: 'productodetalle', loadChildren: './productodetalle/productodetalle.module#ProductodetallePageModule' },
  { path: 'detalle', loadChildren: './detalle/detalle.module#DetallePageModule' },  { path: 'carrito', loadChildren: './carrito/carrito.module#CarritoPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
