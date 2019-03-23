import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'search-item',
        loadChildren: '../search-item/search-item.module#SearchItemPageModule'
      },
      { path: 'carrinho-item',
        loadChildren: '../carrinho-item/carrinho-item.module#CarrinhoItemPageModule'
      }
    ]
  }
  //{ path: '', redirectTo: 'search-item', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    //RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
