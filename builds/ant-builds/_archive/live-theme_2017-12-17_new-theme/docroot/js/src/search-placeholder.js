// INJECT SEARCH INPUT PLACEHOLDER TEXT

var search = document.querySelector(".search-custom").getElementsByTagName("input")[6];
if(search != null) {
  search.setAttribute('placeholder', search.getAttribute("Title"));
}
