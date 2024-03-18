'use strict';

const list = document.querySelector('.list');

const liAddText = () => {
  let li, text, lastItem, userText;

  userText = prompt('Введите текст');
  lastItem = list.querySelector('li:last-child');

  if (userText === null || userText.toLowerCase() === 'exit') {
    return;
  }

  if (userText.trim() === '') {
    return liAddText();
  }

  if (userText.toLowerCase() === 'del') {
    if (lastItem) {
      lastItem.remove();
    }
    return;
  }

  if (userText.toLowerCase() === 'clear') {
    list.innerHTML = '';
    return;
  }

  li = document.createElement('li');

  text = document.createTextNode(userText);
  li.append(text);
  list.append(li);

  liAddText();
};

liAddText();
