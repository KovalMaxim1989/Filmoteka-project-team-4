import { onQueue, onWatched, onLoadLibrary } from './js/library-markup';
import { refsLib } from './js/library-pagination';
import { scrollTop } from './js/button';
window.onload = onLoadLibrary();

onQueue();
onWatched();
