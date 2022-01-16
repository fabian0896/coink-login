import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderControllerService {

  constructor(
    private modalCtr: ModalController,
  ) { }

  async show() {
    const modal = await this.modalCtr.create({
      component: LoaderComponent,
      cssClass: 'loader-modal',
    });
    await modal.present();
    return modal;
  }
}
