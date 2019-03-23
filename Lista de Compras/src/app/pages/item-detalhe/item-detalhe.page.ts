import { Component, OnInit } from '@angular/core';
//import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Events } from '@ionic/angular';
import { ItemProviderService } from '../../services/item-provider.service';
import { Item } from '../../model/item';


@Component({
  selector: 'app-item-detalhe',
  templateUrl: './item-detalhe.page.html',
  styleUrls: ['./item-detalhe.page.scss'],
})
export class ItemDetalhePage implements OnInit {

  private itemUuid : string;
  public item: Item;

  constructor(private activatedRoute: ActivatedRoute, private itemProvider: ItemProviderService, private events: Events) { }

  ngOnInit() {
    // Get parameter called 'id' from query string
  this.itemUuid = this.activatedRoute.snapshot.params.id;
  this.item = this.itemProvider.getItem(this.itemUuid);
  // Subscribe data changes to fetch item again (this is needed to wait for data to load if opening screen directly)
  this.events.subscribe('item-data-changed', () => {
    this.item = this.itemProvider.getItem(this.itemUuid);
  });
  }
}
