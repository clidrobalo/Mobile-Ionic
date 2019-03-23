import { Component, OnInit } from '@angular/core';
import { NavController, ToastController} from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ItemProviderService } from '../../services/item-provider.service';
import { Item } from '../../model/item';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  constructor(private itemProvider: ItemProviderService, private navCtrl: NavController, private toastController: ToastController) { }
  ngOnInit() {
  }

  saveItem(itemForm: any) {
    // Validate form
    if(itemForm.invalid){
      console.log("Error on Form!")
      this.presentToast("Error on Form!");
    }
    else {
      console.log("Valid form submitted.");
      // Create Lista object
      let newItem = new Item(
        this.itemProvider.genItemUuid(itemForm.value.descricao, itemForm.value.tipo),
        itemForm.value.descricao,
        itemForm.value.photo,
        itemForm.value.tipo,
        itemForm.value.quantidade,
        itemForm.value.adquirido
      );
      // Save Item in provider and publish change
      this.itemProvider.save(newItem);
      this.itemProvider.notifyDataChange();

      // Show notification and log
      console.log("Item '" + newItem.descricao + "' Saved!")
      this.presentToast("Item '" + newItem.descricao + "' Saved!");
      // Go back to previous screen
      this.navCtrl.back();
    }
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      position: 'top',
      duration: 3000,
      color: 'secondary'
    });
    toast.present();
  }

}
