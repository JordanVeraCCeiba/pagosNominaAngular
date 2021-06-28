import { InjectionToken } from '@angular/core';

export const listaErrores = {
  required: _ => `<strong> campo requerido </strong>`,
  min: ({ min }) => `Valor mínimo ${min}`,
  max: ({ max }) => `Valor máximo ${max}`,
  repetido: () => `Elemento repetido`,
  email: () => `Esto no es un correo`,
  minlength: ({ requiredLength, actualLength }) =>
    `Mínimo <strong>${requiredLength}</strong> caracteres, actual <strong>${actualLength}</strong>`,
  maxlength: ({ requiredLength, actualLength }) =>
    `Máximo <strong>${requiredLength}</strong> caracteres, actual <strong>${actualLength}</strong>`,
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => listaErrores,
});
