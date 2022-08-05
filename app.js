/**
 * 
 * @Author: JOSE LOPEZ RISSO
 * Email: jal.risso@gmail.com
 * Date: 03-08-2022
 * License: 
 * 
 */



class Book {
  constructor(id, title, author, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
  }
};






/* * * * * * * ACA EMPIEZA EL MAIN () * * * * * */ 
 
const booksArray = [];
loadMyBooks(booksArray); //Cargamos libros
const discount = checkMyLuck(); //El usuario chequea su suerte para ver si obtiene un descuento.


if (discount) {
  alert(`Felicitaciones!: Obtuviste un descuento de: ${discount}%`);
  applyADiscount(booksArray, discount);
} else {
  alert(`Esta vez NO obtuviste descuento, seguí participando.`);
}
renderElements(booksArray);


/* * * * * * *  FIN DEL MAIN * * * * * * * * */














/*
 * 
 * MIS FUNCIONES 
 * 
 * 
 */


function loadMyBooks(booksArray) {
  booksArray.push(new Book(0, 'The Aleph', 'Jorge Luis Borges', 4550));
  booksArray.push(new Book(1, 'Abel Sánchez', 'Miguel de Unamuno', 6230));
  booksArray.push(new Book(2, 'Sobre Héroes y Tumbas', 'Ernesto Sábato', 2498));
  booksArray.push(new Book(3, 'Cien años de Soledad', 'Gabriel García Márquez', 3150));
  booksArray.push(new Book(4, 'Crimen y Castigo', 'Fiodor Dostoyevski', 1070));
}


function checkMyLuck() { //POSIBILIDAD DE QUE EL USUARIO OBTENGA UN DESCUENTO (QUE PUEDE SER 5%, 10%, 15%, y 20%)
  alert('Hace click y participá por un DESCUENTO de hasta un 20%!');
  const discountArray = [0, 5, 10, 15, 20];
  return discountArray[Math.floor(Math.random() * discountArray.length)];
}



function renderElements(booksArray) {
  const mySection = document.querySelector('.intro');
  const template = document.querySelector('template');
  const myCard = template.content.querySelector('.product-card')

  booksArray.forEach((element) => {
    const cardCopy = myCard.cloneNode(true);
    cardCopy.children[0].innerText = element.title;
    cardCopy.children[1].innerText = element.author;
    cardCopy.children[2].innerText = element.price;
    mySection.append(cardCopy);
  });
}




//FUNCION APLICAR DESCUENTOS: 
//La funcion recibe los siguientes parámetros:
//1 -> Array de Objetos
//2 -> Porcentaje de descuento que quiero aplicar sobre los OBJETOS.
function applyADiscount(objectArray, discountPercentage, idList = []) {

  //MAP IMPLEMENTATION  (ENTRA ACÁ X DEFAULT)
  if (idList.length === 0) return objectArray.map(x => {
    x.price -= (x.price * discountPercentage / 100);
    return x;
  });

  //FILTER IMPLEMENTATION  (CUANDO EL USUARIO PASA UNA LISTA DE IDS SOBRE LOS PRODUCTOS ESPECIFICOS A LOS CUALES QUIERE APLICAR DESCUENTO)
  return objectArray.filter((x, index) => {
    if (idList.includes(index)) {
      x.price -= (x.price * discountPercentage / 100);
      return x;
    }
  });
};