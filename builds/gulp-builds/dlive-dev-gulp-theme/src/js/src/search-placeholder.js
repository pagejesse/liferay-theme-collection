// INJECT SEARCH INPUT PLACEHOLDER TEXT
if (document.querySelector('.search-custom') != null) {
  var searchField = document
    .querySelector('.search-custom')
    .getElementsByTagName('input')[6];
  searchField.setAttribute('placeholder', searchField.getAttribute('Title'));
}
