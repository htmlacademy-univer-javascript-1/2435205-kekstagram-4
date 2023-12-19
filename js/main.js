import {createPhotoDescription} from './data.js';
import {createPictures} from './thumbnail.js';
import './large-Image.js';
import './form.js';
import './hashtag.js';

const pictures = Array.from({length: 25}, createPhotoDescription());
createPictures(pictures);

