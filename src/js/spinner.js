import { refs } from './refs';

export class Spinner {
  start() {
    refs.backdropSpinner.classList.remove('is-hidden');
  }

  stop() {
    refs.backdropSpinner.classList.add('is-hidden');
  }
}
