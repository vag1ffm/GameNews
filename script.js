function app() {
	const buttons = document.querySelectorAll('.button')
	const cards = document.querySelectorAll('.news')
		
	function filter (category, items) {
		items.forEach((item) => {
			const isItemFiltered = !item.classList.contains(category)
			const isShowAll = category.toLowerCase() === 'all'
			if (isItemFiltered && !isShowAll) {
				item.classList.add('hide')
			} else {
				item.classList.remove('hide')
			}
		})
	}
		
	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			const currentCategory = button.dataset.filter
			filter(currentCategory, cards)
		})
	})
}
app()


const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}


function showjanr() {
  document.getElementById('janr').classList.toggle('show');
}















// const category = document.querySelector("#category")
// const filter = document.querySelector("#filter")

// category.addEventListener('click', show1)
// category.addEventListener('click', close1)

// function show1(){
// 	filter.style.display = 'block';

// }

// function close1() {
// 	filter.style.display = 'none';
// }