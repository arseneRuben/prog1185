let books = [
{
	isbn : "1",
	image : "angular.jpg",
	stock : 34,
	title : " Angular JS",
	price : 56
},
{
	isbn : "2",
	image : "ja_angular.jpg",
	stock : 4,
	title : " JavaScript et Angular",
	price : 36
},
{
	isbn : "3",
	image : "jquery.jpg",
	stock : 34,
	title : " JQuery",
	price : 56
},
{
	isbn : "4",
	image : "js.jpg",
	stock : 14,
	title : " JavaScript : Le guide complet",
	price : 6
},
{
	isbn : "5",
	image : "js_jquery.jpg",
	stock : 4,
	title : " JavaScript et JQuery",
	price : 46
},
{
	isbn : "6",
	image : "node_js.jpg",
	stock : 4,
	title : " Node Js",
	price : 38
},
{
	isbn : "7",
	image : "php.jpg",
	stock : 4,
	title : " Php",
	price : 46
},
{
	isbn : "8",
	image : "php_mysql.jpg",
	stock : 4,
	title : " Php et Mysql",
	price : 38
},
{
	isbn : "9",
	image : "react.jpg",
	stock : 12,
	title : " React",
	price : 98
},
{
	isbn : "10",
	image : "symfony_php.jpg",
	stock : 12,
	title : " Php et Symfony",
	price : 46
},


]

/* 
	1- Afficher les elements du tableau books dans le panier et mettre a jour les informations du panier // 5pts
	2- Gerer l'ajout et la dimunition de la quatite d'un item dans le pagner							 // 5pts
	3- Creer un formulaire permettant d'ajouter un nouveau livre dans le tableau books
	4- Supprimer un produit du panier					 // 5pts
	5- Modifier le prix total




*/

function addInputQty() {
	const inputQty = document.createElement("input")
	inputQty.type="number"
	inputQty.min = "0"
	inputQty.max = "99"
	inputQty.className="qtyinput"
	inputQty.value="1"
	const tdQty =document.createElement("td")
	tdQty.append(inputQty)

	inputQty.onchange= function(event){
		const priceNode =event.target.parentElement.nextSibling.nextSibling
		
		const idPd = priceNode.parentElement.id
		//const idPd = priceNode.parentElement.id
		const currentBook = books.filter(item => item.isbn == idPd )[0]
		
		priceNode.innerText = event.target.value * currentBook.price

	}

	return tdQty
}

function addOneBookInCart(book){
	const trProduct = document.createElement("tr")
	trProduct.id=book.isbn
	trProduct.className = "productitm"
	const img = document.createElement("img")
	img.src = "images/"+book.image 
	img.className = "thumb"
	const tdImg =document.createElement("td")
	tdImg.append(img)
	trProduct.append(tdImg)

	trProduct.append(addInputQty())
	


	const tdPdTitle =document.createElement("td")
	const nodePdTitle = document.createTextNode(book.title)
	tdPdTitle.append(nodePdTitle)
	trProduct.append(tdPdTitle)

	const tdPdPrice =document.createElement("td")
	const nodePdPrice = document.createTextNode(book.price)
	tdPdPrice.append(nodePdPrice)
	trProduct.append(tdPdPrice)


	tbody.prepend(trProduct)
}
// 1
const  tbodies = document.getElementsByTagName("tbody")

const tbody = tbodies[0]

books.map(book=>addOneBookInCart(book))


function getTotalPriceIncart(){
	let trCommandLines = document.getElementsByClassName("productitm");
	let totaPrice = 0
	(Array.from(trCommandLines)).map(item =>(totaPrice = totaPrice + Number.parseInt(item.lastChild.innerText)))
	return totaPrice;
}
console.log(getTotalPriceIncart())




