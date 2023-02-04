import axios from 'axios';
import Notiflix from 'notiflix';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { refs } from './refs';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'd03712107dcdd723f1173c5ee2c0d8c1';

async function fetchTrailerKey(currentId) {
  //   spinnerOn();
  try {
    const response = await axios.get(
      `${BASE_URL}${currentId}/videos?api_key=${API_KEY}`
    );
    const key = response.data.results[0].key;
    // debugger;
    // renderTrailer(key);
    // refs.trailerBtn.onclick = () => {
    //   basicLightbox
    //     .create(
    //       `<div class="modal-trailer">
    //       <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //       </div>`
    //     )
    //     .show();
    // };
    return key;
  } catch (error) {
    Notiflix.Notify.failure('Sorry, there is no trailer for this movie');
  }
  //   spinnerOff();
}
// debugger

function renderTrailer(key) {
  const instance = basicLightbox.create(
    `<div class="modal-trailer">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>`,
    {
      onShow: () => window.addEventListener('keydown', onEsc.bind(instance)),
      onClose: () =>
        window.removeEventListener('keydown', onEsc.bind(instance)),
    }
  );
  // debugger
  instance.show();

  function onEsc(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
}

export { fetchTrailerKey };
