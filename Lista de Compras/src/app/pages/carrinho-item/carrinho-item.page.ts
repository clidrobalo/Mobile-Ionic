import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { ItemProviderService } from '../../services/item-provider.service';
import { Item } from '../../model/item';

@Component({
  selector: 'app-carrinho-item',
  templateUrl: './carrinho-item.page.html',
  styleUrls: ['./carrinho-item.page.scss'],
})
export class CarrinhoItemPage implements OnInit {

  public lista: Array<Item>;

  constructor(private itemProvider:ItemProviderService, private events:Events) { }

  ngOnInit() {
    // Filter data
    this.filterItemData();
    // Subscribe data changes to reapply filter
    this.events.subscribe('lista-data-changed', () => {
      this.filterItemData();
    });
  }

  toggleChanged(item: Item) {
    console.log("Item '" + item.descricao + "' " + (item.adquirido?"removido do":"adicionado ao") + " carrinho.");
    var index = this.lista.indexOf(item);
    this.lista[index].adquirido = !this.lista[index].adquirido;
    this.itemProvider.notifyDataChange();
  }

  filterItemData() {
    console.log("Filtering item no carrinho")
    // this.lista = this.itemProvider.getLista().filter((item) => {
    //   return item.adquirido;
    // });
    this.lista = this.itemProvider.getLista();
  }

}
