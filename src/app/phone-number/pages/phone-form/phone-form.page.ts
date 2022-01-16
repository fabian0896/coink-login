import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CoinkService } from 'src/app/core/services/coink.service';
import { LoaderControllerService } from 'src/app/core/services/loader-controller.service';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.page.html',
  styleUrls: ['./phone-form.page.scss'],
})
export class PhoneFormPage implements OnInit {
  value = '';
  openModal = false;
  loading = false;
  loadingModal: HTMLIonModalElement;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coinkService: CoinkService,
    private loaderCrt: LoaderControllerService,
  ) {}

  ngOnInit() {
  }

  onChange(value: string) {
    this.value = value;
  }

  async onConfirm(phoneNumber: string) {
    const loader = await this.loaderCrt.show();
    const res = await this.coinkService.sendSmsVerificationNumber(phoneNumber)
      .toPromise();
    console.log(res);
    await loader.dismiss();
    this.router.navigate(['code'], {
      relativeTo: this.route,
      state: {
        phone: phoneNumber,
      }
    });
  }
}
