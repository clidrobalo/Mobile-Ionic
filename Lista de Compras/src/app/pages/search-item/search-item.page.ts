import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { ItemProviderService } from '../../services/item-provider.service';
import { Item } from '../../model/item';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.page.html',
  styleUrls: ['./search-item.page.scss'],
})
export class SearchItemPage implements OnInit {

  public lista: Array<Item>;

  constructor(private itemProvider: ItemProviderService, private events : Events) { }

  //constructor() { }
  ngOnInit() {
    this.lista = this.itemProvider.getLista();
  }

  onSearchInputChanged(event: any) {
    // get the value of the searchbar and log it
    let searchQuery = event.target.value;
    console.log("Searching Item with query '" + searchQuery + "'");

    // if the value is an empty string don't filter the items
    if (searchQuery && searchQuery.trim() != '') {
      this.lista = this.itemProvider.getLista().filter((item) => {
        return (item.descricao.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1);
      })
    }
    // Reset list is search query is cleared
    else {
      this.lista = this.itemProvider.getLista();
    }
  }

  public apagarItem(item : Item) {
      var index = this.lista.indexOf(item);
      this.lista.splice(index, 1);
      console.log("Item '", item.descricao , "' apagado.");
  }

  public toggleChanged(item: Item) {
    console.log("Item '" + item.descricao + "' " + (item.adquirido?"removido do":"adicionado ao") + " carrinho.");
    var index = this.lista.indexOf(item);
    this.lista[index].adquirido = !this.lista[index].adquirido;
    this.itemProvider.notifyDataChange();
  }

}
