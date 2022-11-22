/*
 TODO Entrega numero 1
*/

/*
 ? Creación de clase 
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


const ProductManager = class {

    constructor(title, description, price, thumbnail, code, stock){

        
        this.title = title,
        this.description = description,
        this.price = price,
        this.thumbnail = thumbnail,
        this.code = code,
        this.stoc = stock
        }

}

readline.question('Nuevo producto', producto => {
    const producto =[]
    producto.push = new ProductManager()
    console.log(`Hey there ${name}!`);
    readline.close();
  });

const prueba = new ProductManager('a', 'b', 'c', 'd', 'e', 'f');






