import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

interface PageModel {
  textValue: string;
  selectedDropDownValue: number;
  selectedMultipleDropDownValue: number;
  isChecked: boolean;
  radioValue: string;
}

@Component({
  templateUrl: './form.component.html'
})
export class FormComponent {
  public pageTitle = 'Add Product';
  pageModel: PageModel = {
    textValue: `Default Value`,
    selectedDropDownValue: 1,
    selectedMultipleDropDownValue: 2,
    isChecked: true,
    radioValue: 'Value1'
  };

  onBlur(textField: NgModel) {
    console.log(textField.value);
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Invalid Form!');
    } else {
      alert('Valid Form!');
      console.log(this.pageModel.textValue);
    }
  }
}
