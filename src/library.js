import { onQueue, onWatched, onLoadLibrary } from './js/library-markup';
import { refsLib } from './js/library-pagination';
import { scrollTop } from './js/button';

import './js/modal';

window.onload = onLoadLibrary();

onQueue();
onWatched();
