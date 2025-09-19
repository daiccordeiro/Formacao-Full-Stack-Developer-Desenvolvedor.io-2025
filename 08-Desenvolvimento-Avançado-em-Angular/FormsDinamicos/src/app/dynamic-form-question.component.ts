import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';

@Component({
    selector: 'app-question',
    templateUrl: './dynamic-form-question.component.html',
    standalone: false
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: UntypedFormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
