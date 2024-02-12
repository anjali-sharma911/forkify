import icons from 'url:../../img/icons.svg';
import View from './View.js';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      //   console.log(goToPage);
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    //We are on page 1 and there are  other pages
    if (curPage === 1 && numPages > 1) {
      return `<button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
	  <span>Page ${curPage + 1}</span>
	  <svg class="search__icon">
		<use href="${icons}#icon-arrow-right"></use>
	  </svg>
	</button>`;
    }

    //we are on last page
    if (curPage === numPages && numPages > 1) {
      return `<button data-goto="${
        curPage - 1
      }"class="btn--inline pagination__btn--prev">
	  <svg class="search__icon">
		<use href="${icons}#icon-arrow-left"></use>
	  </svg>
	  <span>Page ${curPage - 1}</span>
	</button>`;
    }
    // we are on some other page
    if (curPage < numPages) {
      return `
	  <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
	  <svg class="search__icon">
		<use href="${icons}#icon-arrow-left"></use>
	  </svg>
	  <span>Page ${curPage - 1}</span>
	</button> 
	  <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
	  <span>Page ${curPage + 1}</span>
	  <svg class="search__icon">
		<use href="${icons}#icon-arrow-right"></use>
	  </svg>
	</button>`;
    }

    //We are on page 1 and there are no other pages
    return '';
  }
}

export default new paginationView();
// _generateMarkupButtonprev(curPage){
// 	return `<button class="btn--inline pagination__btn--prev">
// 	  <svg class="search__icon">
// 		<use href="${icons}#icon-arrow-left"></use>
// 	  </svg>
// 	  <span>${curPage - 1}</span>
// 	  </button>`

// }

// _generateMarkupButtonnext(curPage){
// 	return `<button class="btn--inline pagination__btn--next">
// 	<span>${curPage + 1}</span>
// 	<svg class="search__icon">
// 	  <use href="${icons}#icon-arrow-right"></use>
// 	</svg>
//   </button>`

// }
