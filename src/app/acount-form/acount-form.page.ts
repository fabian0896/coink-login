import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-acount-form',
  templateUrl: './acount-form.page.html',
  styleUrls: ['./acount-form.page.scss'],
})
export class AcountFormPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  form: FormGroup;
  showCode = false;
  showCodeConfirm = false;


  constructor(
    private builder: FormBuilder,
  ) {
    this.form = this.builder.group({
      phoneNumber: '',
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

  ngOnInit() {
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
    console.log(this.form.value);
  }


  toggleShowCode() {
    this.showCode = !this.showCode;
  }

  toggleShowCodeConfirm() {
    this.showCodeConfirm = !this.showCodeConfirm;
  }
}
