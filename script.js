const LINK_SELECTED = 'link-selected';
var navigation = document.getElementsByClassName('navigation-link');
for(let i=0;i<navigation.length;i++){
  navigation[i].onclick = function(){
    var actives = document.getElementsByClassName(LINK_SELECTED)[0];
    actives.classList.remove(LINK_SELECTED);
    this.classList.add(LINK_SELECTED);
  }
}

const ACTIVE = 'active';
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var slides = document.getElementsByClassName('slider-content');
var end = slides.length-1;

next.onclick = function (){
  var activeEl = document.querySelector('.active');
  if(activeEl.nextElementSibling!=next) {
    activeEl.classList.remove(ACTIVE);
    activeEl.nextElementSibling.classList.add(ACTIVE);
  } else {
    activeEl.classList.remove(ACTIVE);
    slides[0].classList.add(ACTIVE);
  }
}
  
previous.onclick = function (){
  var activeEl = document.querySelector('.active');
  if(activeEl.previousElementSibling!=previous) {
    activeEl.classList.remove(ACTIVE);  
    activeEl.previousElementSibling.classList.add(ACTIVE);
  } else {
    activeEl.classList.remove(ACTIVE);
    slides[end].classList.add(ACTIVE);
  }
}

const INLINE_BLOCK = 'inline-block';
var ihorizontal = document.querySelector ('.iphone-horizontal--duplicate');
var ihorizontal_off = document.querySelector ('.iphone-horizontal--off');

ihorizontal.onclick = function () {
  if (ihorizontal_off.style.display==INLINE_BLOCK) {
    ihorizontal_off.style.display='none';
  } else {
      ihorizontal_off.style.display=INLINE_BLOCK;
  }
}

ihorizontal_off.onclick = function () {
  if (ihorizontal_off.style.display!=INLINE_BLOCK) {
    ihorizontal_off.style.display='none';
  }
}

var ivertical = document.querySelector ('.iphone-vertical--duplicate');
var ivertical_off = document.querySelector ('.iphone-vertical--off');

ivertical.onclick = function () {
  if (ivertical_off.style.display==INLINE_BLOCK) {
    ivertical_off.style.display='none';
  } else {
      ivertical_off.style.display=INLINE_BLOCK;
    }
}

ivertical_off.onclick = function () {
  if (ivertical_off.style.display!=INLINE_BLOCK) {
    ivertical_off.style.display='none';
  }
}

const IMAGE_ACTIVE = 'image-active';
var images = document.getElementsByClassName('image');
for(let i=0;i<images.length;i++){
  images[i].onclick = function(){  
    var actives = document.getElementsByClassName(IMAGE_ACTIVE)[0];
    if (actives) actives.classList.remove(IMAGE_ACTIVE);
    this.classList.add(IMAGE_ACTIVE);
    if(this==actives) actives.classList.remove(IMAGE_ACTIVE);
  }
}

const ELEMENT_SELECTED = 'filter-element-selected';
var filter = document.getElementsByClassName('filter-element');
var image_block = document.getElementsByClassName('portfolio-images--section')[0];
var element =  document.querySelectorAll ('.portfolio-images--section li');


for(let i=0;i<filter.length;i++) {
  filter[i].onclick = function() {
    var actives = document.getElementsByClassName(ELEMENT_SELECTED)[0];
    actives.classList.remove(ELEMENT_SELECTED);
    this.classList.add(ELEMENT_SELECTED);
    var fragment = document.createDocumentFragment();
    for (j=0;j<element.length;j++) {
      if (element[j].children[0].dataset.genre == this.value) {
        fragment.prepend(element[j]);
      } else {
          fragment.append(element[j]);
        }
    }
    image_block.appendChild(fragment);
  }
}

var battonSubmit=document.querySelector('.form-submit');
battonSubmit.onclick = function () {
  var message = document.querySelector('.message');
  var email = document.querySelector('input[name=email]');
  var name = document.querySelector('input[name=name]');
  var regular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (name.value!=''){
    if(regular.test(String(email.value).toLowerCase())){
      message.style.display = 'block';
    } else alert('Enter the correct email address!!!');
  } else alert('Name fields required!!!');

  var subject = document.querySelector('input[name=subject]');
  var description = document.querySelector('.form-input_textarea');
  var message_subject = document.querySelector('.message-subject');
  var message_description = document.querySelector('.message-description');
  message_description.innerText=description.value;
  if (subject.value == '') {
    if (message_subject.innerText==='Subject:') {
      message_subject.innerText += ' no subject';
    } else message_subject.innerText='Subject:'+' no subject';
  } else {
    if (message_subject.innerText==='Subject:') {
      message_subject.innerText += ' no subject';
    } else message_subject.innerText='Subject:'+' ' + subject.value;
  }
}

var buttonOK=document.querySelector('.medal-button')
buttonOK.onclick = function () {
  var message = document.querySelector('.message');
  message.style.display = 'none';
}

