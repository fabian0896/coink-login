import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { zip } from 'rxjs';
import { CoinkService } from '../core/services/coink.service';

import { Document } from 'src/app/models/document.model';
import { Gender } from 'src/app/models/gender.model';
import { LoaderControllerService } from '../core/services/loader-controller.service';
import { Router } from '@angular/router';
import { AccountService } from '../core/services/account.service';
import { AccountData } from '../models/account.model';

@Component({
  selector: 'app-acount-form',
  templateUrl: './account-form.page.html',
  styleUrls: ['./account-form.page.scss'],
})
export class AccountFormPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  form: FormGroup;
  showCode = false;
  showCodeConfirm = false;

  documentTypes: Document[] = [];
  genders: Gender[] = [];

  constructor(
    private builder: FormBuilder,
    private coinkService: CoinkService,
    private loaderCtr: LoaderControllerService,
    private router: Router,
    private accountService: AccountService,
  ) {
    this.form = this.builder.group({
      documentType: ['', [Validators.required]],
      document: ['', [Validators.required]],
      expeditionDate: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      emailConfirm: ['', [Validators.required, Validators.email]],
      code: ['', [Validators.required, Validators.minLength(4)]],
      codeConfirm: ['', [Validators.required, Validators.minLength(4)]],
    }, {
      validators: [this.codeMatchValidator, this.emailMatchValidator],
    });
  }

  get documentType(){ return this.form.get('documentType'); }
  get document(){ return this.form.get('document'); }
  get expeditionDate(){ return this.form.get('expeditionDate'); }
  get birthday(){ return this.form.get('birthday'); }
  get gender(){ return this.form.get('gender'); }
  get email(){ return this.form.get('email'); }
  get emailConfirm(){ return this.form.get('emailConfirm'); }
  get code(){ return this.form.get('code'); }
  get codeConfirm(){ return this.form.get('codeConfirm'); }

  async getOptions() {
    const loader = await this.loaderCtr.show();
    const [documentTypes, genders] = await zip(
      this.coinkService.getDocumentTypes(),
      this.coinkService.getGenders(),
    ).toPromise();
    console.log(documentTypes, genders);
    this.genders = genders;
    this.documentTypes = documentTypes;
    await loader.dismiss();
  }

  ngOnInit() {
    this.getOptions();
  }

  emailMatchValidator(g: FormGroup) {
    return g.get('email').value === g.get('emailConfirm').value
       ? null : {mismatchEmail: true};
  }

  codeMatchValidator(g: FormGroup) {
    return g.get('code').value === g.get('codeConfirm').value
       ? null : {mismatchCode: true};
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value as AccountData;
    this.accountService.setData(data);
    this.router.navigateByUrl('/info');
  }


  toggleShowCode() {
    this.showCode = !this.showCode;
  }

  toggleShowCodeConfirm() {
    this.showCodeConfirm = !this.showCodeConfirm;
  }
}
