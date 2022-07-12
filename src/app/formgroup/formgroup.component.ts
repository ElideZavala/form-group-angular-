import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.sass']
})
export class FormgroupComponent implements OnInit {

  form : FormGroup;

  constructor(
    private formBuider: FormBuilder
  ) {
    // Ejecutar el metodo
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuider.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [ Validators.required, Validators.maxLength(80)]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });

    // this.form.valueChanges
    // .pipe(
    //   debounceTime(500)
    // )
    // .subscribe(value => {
    //   console.log(value);
    // })
  };

  // private buidForm() {
  //   this.form = this.formBuider.group({
  //     age: [0, Validators.min(18)], // Validamos que la edad minima debe de ser 18.
  //     price: [0, Validators.compose([Validators.min(500), Validators.max(3000)])],
  //     prices: [0, [Validators.min(500), Validators.max(3000)]],
  //     name: ['', Validators.required], // Indicamos que el nombre sera requerido.
  //     terms: [false, Validators.requiredTrue], // Indicamos que el campo terms sera requerido.
  //     email: ['', [Validators.required, Validators.email]], // Requerido y debe ser email.
  //     text: ['', Validators.pattern(/([a-zA-Z])\w+/)],
  //     text2: ['', [Validators.pattern(/([a-zA-Z])\w+/), Validators.minLength(5), Validators.maxLength(80)]], // Validamos expresiones regulares y longitud minima y maxima.
  //   });
  // }

  save(event: Event) {
    event.preventDefault();
    console.log('save')
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      // Mostrar como tocados los campos que no se han validado
      this.form.markAllAsTouched();
    }
  }

  // con get hacemos que este codigo con ser un getter funciona como un atributo de la clase.
  get emailField() {
    return this.form.get('email')
  }

  get emailFieldIsValid() {
    return this.emailField.touched && this.emailField.valid;
  }

  get emailFieldIsInvalid() {
    return this.emailField.touched && this.emailField.invalid;
  }

  doSomething() {
    console.log('doSomething');
  }

}
