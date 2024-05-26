let books = [
	{
		isbn: "1",
		image: "angular.jpg",
		stock: 34,
		title: " Angular JS",
		price: 56
	},
	{
		isbn: "2",
		image: "ja_angular.jpg",
		stock: 4,
		title: " JavaScript et Angular",
		price: 36
	},
	{
		isbn: "3",
		image: "jquery.jpg",
		stock: 34,
		title: " JQuery",
		price: 56
	},
	{
		isbn: "4",
		image: "js.jpg",
		stock: 14,
		title: " JavaScript : Le guide complet",
		price: 6
	},
	{
		isbn: "5",
		image: "js_jquery.jpg",
		stock: 4,
		title: " JavaScript et JQuery",
		price: 46
	},
	{
		isbn: "6",
		image: "node_js.jpg",
		stock: 4,
		title: " Node Js",
		price: 38
	},
	{
		isbn: "7",
		image: "php.jpg",
		stock: 4,
		title: " Php",
		price: 46
	},
	{
		isbn: "8",
		image: "php_mysql.jpg",
		stock: 4,
		title: " Php et Mysql",
		price: 38
	},
	{
		isbn: "9",
		image: "react.jpg",
		stock: 12,
		title: " React",
		price: 98
	},
	{
		isbn: "10",
		image: "symfony_php.jpg",
		stock: 12,
		title: " Php et Symfony",
		price: 46
	},


]

/* 
	1- Afficher les elements du tableau books dans le panier et mettre a jour les informations du panier 
	2- Gerer l'ajout et la dimunition de la quatite d'un item dans le pagner							 
	3- Creer un formulaire permettant d'ajouter un nouveau livre dans le tableau books
	4- Supprimer un produit du panier					 
	5- Modifier le prix total




*/


const tBody = document.getElementsByTagName('tbody')[0];
let = totalPrice = 0;
books.map(book => {
	let tr = document.createElement('tr');

	let firstTd = document.createElement('td');
	let img = document.createElement('img');
	
	img.src = `img/${book.image}`;
	img.alt = book.image;
	img.addEventListener("click",showMessage);
	firstTd.append(img);
	tr.append(firstTd);
	

	let qtyTd = document.createElement('td');
	let inputElement = document.createElement('input');
	inputElement.min=0;
	inputElement.value=1;
	inputElement.max = book.stock;
	inputElement.type= 'number';
	inputElement.className = 'form-control'
	qtyTd.append(inputElement);
	tr.append(qtyTd);

	let titleTd = document.createElement('td');
	titleTd.className = "title"
	titleTd.textContent = book.title;
	tr.append(titleTd);

	let priceTd = document.createElement('td');
	priceTd.textContent = `$${book.price}`;
	tr.append(priceTd);

	let totalTd = document.createElement('td');
	totalTd.textContent = `$${book.price}`;
	totalTd.className="price"
	tr.appendChild(totalTd);
	let price = parseInt(totalTd.textContent.slice(1, totalTd.textContent.length))
	if(!isNaN(price)){
		totalPrice += price;
	} 
	let actionTd = document.createElement('td');
	let icon = document.createElement('i');
	icon.className='fa fa-trash';

	actionTd.append(icon);
	tr.appendChild(actionTd);
	tBody.prepend(tr);


	let spanTotalPrice = document.getElementsByClassName("thick")[0]
	spanTotalPrice.textContent = `$${totalPrice}`;
}
)





function showMessage(){
	console.log("Interessant");
}