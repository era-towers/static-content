"use strict";
/*
https://stackoverflow.com/questions/24414642/responsive-horizontal-page-sliding
Answered by:
https://stackoverflow.com/users/1811992/web-tiki
*/

function adjustPageToScreen(pageClass, containerClass) {
  const spellBookSize = $("." + pageClass).length,
    contentsWidth = 100 * spellBookSize,
    pageWidth = 100 / spellBookSize;
  $("." + containerClass).width(contentsWidth + '%');
  $("." + pageClass).width(pageWidth + '%');
}

function swipeToPreviousPage(event, pageClass, pageNumberAttribute, containerClass) {
  const pageNumber = changePageNumber(event, pageClass, pageNumberAttribute);
  if (pageNumber > 1) {
    turnPage(pageNumber - 2, containerClass);
  }
}

function swipeToNextPage(event, pageClass, pageNumberAttribute, containerClass) {
  const pageNumber = changePageNumber(event, pageClass, pageNumberAttribute);
  const spellBookSize = $("." + pageClass).length;
  if (pageNumber < spellBookSize) {
    turnPage(pageNumber, containerClass);
  }
}

function changePageNumber(event, pageClass, pageNumberAttribute) {
  return parseInt($(event.target.closest("." + pageClass)).attr(pageNumberAttribute));
}

function turnPage(pageNumber, containerClass) {
  const margin = pageNumber * -100 + "%";
  $("." + containerClass).animate({
    marginLeft: margin
  }, 500);
}
