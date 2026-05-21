import { ElementRef, QueryList, DestroyRef, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { fromEvent, merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { GenericValidator, DisplayMessage, ValidationMessages } from '../utils/generic-form-validation';


export abstract class FormBaseComponent {

  protected destroyRef = inject(DestroyRef);
  protected genericValidator!: GenericValidator;
  protected validationMessages!: ValidationMessages;
  displayMessage: DisplayMessage = {};

  mudancasNaoSalvas = false;
  abstract form: FormGroup;


  protected configurarMensagensValidacaoBase(
    validationMessages: ValidationMessages
  ): GenericValidator {

    this.validationMessages = validationMessages;
    return new GenericValidator(validationMessages);
  }

  protected configurarValidacaoFormularioBase(
    formInputElements: QueryList<ElementRef>
  ): void {

    const controlBlurs = formInputElements
      .toArray()
      .map((formControl: ElementRef) =>
        fromEvent(formControl.nativeElement, 'blur')
    );

    merge(...controlBlurs)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {

      this.displayMessage =
        this.genericValidator.processarMensagens(this.form);

      this.mudancasNaoSalvas = this.form.dirty;
    });
  }
}
