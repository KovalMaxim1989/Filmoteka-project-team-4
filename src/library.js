import { onQueue, onWatched, onLoadLibrary } from './js/library-markup';
import { refsLib } from './js/library-pagination';
window.onload = onLoadLibrary();

onQueue();
onWatched();
