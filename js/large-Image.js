const commentTemplate = document.querySelector('#comments').content.querySelector('li');

const body = document.body;
const picturesContainer = document.querySelector('.pictures');

const bigPictureForm = document.querySelector('.big-picture');
const bigPictureImage = bigPictureForm.querySelector('.big-picture__img img');
const bigPictureLikes = bigPictureForm.querySelector('.big-picture__social .likes-count');
const bigPictureDescription = bigPictureForm.querySelector('.big-picture__social .social__caption');
const bigPictureCommentsCount = bigPictureForm.querySelector('.big-picture__social .comments-count');

const closeButton = document.querySelector('#picture-cancel');

const createComment = (comment) =>{
  const currentComment = commentTemplate.cloneNode(true);

  currentComment.querySelector('.social__picture').src = comment.avatar;
  currentComment.querySelector('.social__picture').alt = comment.name;
  currentComment.querySelector('.social__text').textContent = comment.message;

  return(currentComment);

};

const createComments = (comments) => {
  const commentFragment = document.createDocumentFragment();

  comments.forEach((element) => {
    commentFragment.append(createComment(element));
  });

  const socials = document.querySelector('.social__comments');
  socials.innerHTML = '';
  socials.append(commentFragment);

  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
};

const renderBigPicture = (data) =>{
  bigPictureImage.src = data.url;
  bigPictureLikes.textContent = data.likes;
  bigPictureDescription.textContent = data.description;
  bigPictureCommentsCount.textContent = data.comments.length;
};

const closeBigPicture = () => {
  bigPictureForm.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
};

function onDocumentKeyDown (evt) {
  if(evt.key === 'Escape'){
    evt.preventDefault();
    closeBigPicture();
  }
}

const hideStatsElements = (picture) => {
  picture.querySelector('.picture__comments').classList.add('hidden');
  picture.querySelector('.picture__likes').classList.add('hidden');
};

const displayImageAndComments = (data) => {
  renderBigPicture(data);
  createComments(data.comments);
};

const showBigPicture = (data, picture) => {
  bigPictureForm.classList.remove('hidden');
  body.classList.add('modal-open');

  hideStatsElements(picture);
  displayImageAndComments(data);

  document.addEventListener('keydown', onDocumentKeyDown);
  closeButton.addEventListener('click', closeBigPicture);
};

const initPictures = (pictures) => {
  picturesContainer.addEventListener('click', (evt) =>{

    evt.preventDefault();

    const currentPicture = evt.target.closest('[data-id]');

    if(!currentPicture){
      return;
    }

    const currentPictureData = pictures.find((picture) => picture.id === +currentPicture.dataset.id);

    showBigPicture(currentPictureData, currentPicture);
  });
};

export {initPictures};
