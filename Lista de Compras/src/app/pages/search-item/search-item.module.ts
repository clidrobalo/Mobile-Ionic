import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SearchItemPage } from './search-item.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: SearchItemPage
//   }
// ];
//
// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     RouterModule.forChild(routes)
//   ],
//   declarations: [SearchItemPage]
// })
// export class SearchItemPageModule {}

//formato copiado do movies
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SearchItemPage }])
  ],
  declarations: [SearchItemPage]
})
export class SearchItemPageModule {}
