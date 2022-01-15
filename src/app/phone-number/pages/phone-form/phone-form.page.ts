import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoinkService } from 'src/app/core/services/coink.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.page.html',
  styleUrls: ['./phone-form.page.scss'],
})
export class PhoneFormPage implements OnInit {
  value = '';
  openModal = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coinkService: CoinkService,
  ) {}

  ngOnInit() {
  }

  onChange(value: string) {
    this.value = value;
  }

  onConfirm(phoneNumber: string) {
    this.coinkService.sendSmsVerificationNumber(phoneNumber)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['code'], {
          relativeTo: this.route,
          state: {
            phone: phoneNumber,
          }
        });
      });
  }
}
