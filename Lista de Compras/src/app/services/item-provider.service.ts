import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Events } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemProviderService {

  private lista: Array<Item>;

  constructor(private http: Http, private events : Events) {
    this.lista = [];
  }

  public save(item: Item) {
    this.lista.push(item);
    console.log("Item '" + item.descricao + "' saved in-memory!");

  }

  public getLista() {
   // Lazy loading of data within object instance
   if (this.lista.length == 0) {
       this.loadData();
   }
   return this.lista;
 }

 public getItem(itemUuid: string) {
   console.log("Searching item with uuid = " + itemUuid + " in lista db with size " + this.getLista().length);
   let itemFound = this.getLista().find((item) => {
     // return true if ids match
     return item.uuid == itemUuid;
   });
   // log result and return
   if (itemFound) {
     console.log("Item found '" + itemFound.descricao + "' for uuid = " + itemUuid);
   }
   else {
     console.log("Item not found!");
   }
   return itemFound;
 }

 notifyDataChange() {
   // More info on how to use Events at https://ionicframework.com/docs/api/util/Events/
   this.events.publish('item-data-changed');
   console.log("Publishing event 'item-data-changed'");
 }

 loadData() {
    console.log("Loading Data from 'assets/data/lista.json'...");
   // Tutorial on HTTP Data Fetch https://www.joshmorony.com/using-http-to-fetch-remote-data-from-a-server-in-ionic-2/
   // Updated for use in Ionic 4 using pipe
   // Asynchronous call
   this.http.get('assets/data/lista.json').pipe(map(res => res.json())).subscribe(
     data => {
       for (let i=0; i < data.length; ++i) {
         this.lista.push(
           new Item(data[i].uuid, data[i].descricao, data[i].photo, data[i].tipo, data[i].quantidade, data[i].adquirido)
         );
       }
       console.log("Data loaded successfully.");
       this.notifyDataChange();
     },
     err => {
       console.log("Error Loading Data!");
     }
   );
 }

 public genItemUuid(itemDescricao: string, itemTipo: string) {
   let uuid = this.uuid(itemDescricao.length, itemTipo.length);
   console.log("UUID generated: " + uuid);
   return uuid;
 }

 // Use external code https://gist.github.com/LeverOne/1308368 to generate random UUID
 uuid(a,b){for(b=a='';a++<36;b+=a*51&52?(a^15?8^Math.random()*(a^20?16:4):4).toString(16):'-');return b}
}
