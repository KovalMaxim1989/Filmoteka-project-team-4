import { onQueue, onWatched, onLoadLibrary } from './js/library-markup';
window.onload = onLoadLibrary();

onQueue();
onWatched();
