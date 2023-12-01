import {createPhotoDescription} from './data.js';
import {createPictures} from './thumbnail.js';
import { initPictures } from './large-Image.js';

const pictures = Array.from({length: 25}, createPhotoDescription());
createPictures(pictures);
initPictures(pictures);
