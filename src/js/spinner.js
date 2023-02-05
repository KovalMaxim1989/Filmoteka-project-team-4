import { refs } from './refs';
import { bodyScrollOff } from './modal';

export class Spinner {
  start() {
    refs.backdropSpinner.classList.remove('is-hidden');
  }

  stop() {
    refs.backdropSpinner.classList.add('is-hidden');
  }
}
