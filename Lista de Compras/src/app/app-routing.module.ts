import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: '', redirectTo: 'search-item', pathMatch: 'full' },
  { path: 'search-item', loadChildren: './pages/search-item/search-item.module#SearchItemPageModule' },
  { path: 'item-detalhe/:id', loadChildren: './pages/item-detalhe/item-detalhe.module#ItemDetalhePageModule' },
  { path: 'add-item', loadChildren: './pages/add-item/add-item.module#AddItemPageModule' },
  { path: 'carrinho-item', loadChildren: './pages/carrinho-item/carrinho-item.module#CarrinhoItemPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'carrinho-item', loadChildren: './pages/carrinho-item/carrinho-item.module#CarrinhoItemPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    //RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
