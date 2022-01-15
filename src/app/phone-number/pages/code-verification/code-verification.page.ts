import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CoinkService } from 'src/app/core/services/coink.service';

@Component({
  selector: 'app-code-verification',
  templateUrl: './code-verification.page.html',
  styleUrls: ['./code-verification.page.scss'],
})
export class CodeVerificationPage implements OnInit {
  value = '';
  phone = '';

  error = false;

  constructor(
    private coinkService: CoinkService,
    private router: Router,
    private toastController: ToastController,
  ) {
    this.phone = this.router.getCurrentNavigation().extras.state.phone;
  }

  ngOnInit() {
  }

  onChange(value: string) {
    this.value = value;
  }

  onCloseErrorModal() {
    this.error = false;
  }

  verifyCode(code: string) {
    const sameCode = this.coinkService.verifyCode(code);
    if (sameCode) {
      this.router.navigate(['/acount-form'], {
        state: {
          phone: this.phone,
        },
      });
      return;
    }
    this.error = true;
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 800,
    });
    await toast.present();
  }

  async resendCode() {
    this.error = false;
    this.value = '';
    await this.coinkService.sendSmsVerificationNumber(this.phone).toPromise();
    await this.showToast('Codigo enviado nuevamente');
  }
}
