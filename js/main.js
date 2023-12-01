import {createPhotoDescription} from './data.js';
import {createPictures} from './thumbnail.js';

createPictures(Array.from({length: 25}, createPhotoDescription()));
