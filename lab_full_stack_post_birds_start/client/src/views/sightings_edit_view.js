const PubSub = require('../helpers/pub_sub.js')

const SightingsEditView = function(form){
  this.form = form;
};

SightingsEditView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingsEditView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const speciesInput = document.querySelector('#species');
  const newSpecies = document.querySelector('#edit-species');
  speciesInput.value = newSpecies.value;
};

// SightingsEditView.prototype.render = function () {
//   const editContainer = document.createElement('div');
//   editContainer.id = 'edit';
//   consteditForm = document.createElement('form');
//   const speciesDiv = document.createElement('div');
//   const elementLabel = document.createElement('label');
//   const elementInput = document.createElement('input');
//
//
// };
//
// SightingsEditView.prototype.createElement = function (elementType, textContent) {
//   const elementDiv = document.createElement('div');
//   const elementLabel = document.createElement('label');
//   const elementInput = document.createElement('input');
//   elementLabel.for = textContent;
//
// };
