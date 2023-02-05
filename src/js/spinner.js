import { refs } from './refs';
import { bodyScrollOff } from './modal';

console.log(refs.backdropSpinner);
console.log(refs.spinner);

export class Spinner {
  start() {
    refs.backdropSpinner.classList.remove('is-hidden');
  }

  stop() {
    refs.backdropSpinner.classList.add('is-hidden');
  }
}
