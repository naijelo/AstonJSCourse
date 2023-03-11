async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

async function init() {
  const postsData = await getPosts();
  let currentPage = 1;
  let rows = 10;
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  function displayList(arrData, rowPerPage, page) {
    const postsEl = document.querySelector('.posts');
    postsEl.innerHTML = '';
    page--;

    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedData = arrData.slice(start, end);

    paginatedData.forEach((el) => {
      const postEl = document.createElement('div');
      postEl.classList.add('post');
      postEl.innerText = `${el.title}`;
      postsEl.appendChild(postEl);
    })
  }

  function displayPagination(arrData, rowPerPage) {
    const paginationEl = document.querySelector('.pagination');
    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    const ulElement = document.createElement('ul');
    ulElement.classList.add('pagination__list');

    for (let i = 0; i < pagesCount; i++) {
      const liElement = displayPaginationBtn(i + 1);
      ulElement.appendChild(liElement);
    }
    paginationEl.appendChild(ulElement);
  }

  function displayPaginationBtn(page) {
    const liElement = document.createElement('li');
    liElement.classList.add('pagination__item');
    liElement.innerText = page;

    if (currentPage == page) liElement.classList.add('pagination__item--active');

    liElement.addEventListener('click', () => {
      currentPage = page;
      displayList(postsData, rows, currentPage);

      let currentItemLi = document.querySelector('li.pagination__item--active');
      currentItemLi.classList.remove('pagination__item--active');
      liElement.classList.add('pagination__item--active');
    })

    return liElement;
  }

  function previousBtnAction() {
    if (currentPage <= 1) return;
    
    currentPage--;
    displayList(postsData, rows, currentPage);
    
    let currentItemLi = document.querySelector('li.pagination__item--active');
    currentItemLi.classList.remove('pagination__item--active');
    currentItemLi.previousSibling.classList.add('pagination__item--active');
  }

  prev.addEventListener('click', previousBtnAction);

  function nextBtnAction() {
    if (currentPage >= 10) return;

    currentPage++;
    displayList(postsData, rows, currentPage);
    
    let currentItemLi = document.querySelector('li.pagination__item--active');
    currentItemLi.classList.remove('pagination__item--active');
    currentItemLi.nextSibling.classList.add('pagination__item--active');
  }

  next.addEventListener('click', nextBtnAction);

  displayList(postsData, rows, currentPage);
  displayPagination(postsData, rows);
}

init();