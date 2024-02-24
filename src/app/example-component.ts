import {Component} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'example-component',
  templateUrl: 'example-component.html',
  styleUrls: ['example-component.css'],
})
export class ExampleComponent {
  readonly formGroup: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      start: formBuilder.control(''),
      end: formBuilder.control(''),
      input: formBuilder.control(''),
      select: formBuilder.control('')
    });

    this.formGroup.get('start')!.valueChanges.subscribe(x => console.log('start: value changes', x));
    this.formGroup.get('input')!.valueChanges.subscribe(x => console.log('input: value changes', x));
    this.formGroup.get('select')!.valueChanges.subscribe(x => console.log('select: value changes', x));
  }

  click(): void {
    console.log('start: patchValue');
    this.formGroup.get('start')!.patchValue('', { emitEvent: false });
    console.log('start: setValue');
    this.formGroup.get('start')!.setValue('', { emitEvent: false });
    console.log('input: patchValue');
    this.formGroup.get('input')!.patchValue('', { emitEvent: false });
    console.log('input: setValue');
    this.formGroup.get('input')!.setValue('', { emitEvent: false });
    console.log('select: patchValue');
    this.formGroup.get('select')!.patchValue('', { emitEvent: false });
    console.log('select: setValue');
    this.formGroup.get('select')!.setValue('', { emitEvent: false });
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */