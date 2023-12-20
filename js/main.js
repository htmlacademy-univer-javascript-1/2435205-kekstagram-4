import { renderPhotos } from './thumbnail.js';
import {uploadForm} from './form.js';
import {setData} from './fetch.js';
import {showUnloadingErrorMessage} from './util.js';

setData(renderPhotos,
  () => {
    showUnloadingErrorMessage('Не удалось загрузить данные из сервера :(');
  },
  'GET');
uploadForm();

