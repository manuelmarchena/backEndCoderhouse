class ProductManager {

    constructor(){
    this.productos = []
    }

    getProductosId = () =>{
        const cant = this.productos.length
        const productoId = (amount > 0) ? this.productos[amount - 1].id + 1 : 1;
        return productoId
    }

    getProducts = () =>{
        return this.productos
    }

    getProductosById = (productoId) => {
        const productoEncontrado = this.productos.
        find (e => e.id == productoId)

        if(productoEncontrado) {
            console.log("El producto es: ", productoEncontrado.title)
        } else {
            console.log("No encontrado")
        }
    }

    addProduct = (title, description, price, thumbnail, code, stock) =>{
        const producto = {
        title, 
        description, 
        price, 
        thumbnail, 
        code, 
        stock
        }

        const duplicatedCode = (e) => e.code == producto.code
        if(!this.productos.some(duplicatedCode)){
            this.productos.push(producto)
        } else {
            console.log("Un codigo duplicado")
        }
    }   
}

const producto = new ProductManager()

console.log("First call ", producto.getProducts())

producto.addProduct('Libro Uno','The first book',10,'image','ASD-001',6)
producto.addProduct('Libro Dos','The second book',10,'image','ASD-002',6)
producto.addProduct('Libro Tres','The thirth book',10,'image','ASD-003',6)
producto.addProduct('Libro Cuatro','The fourth book',10,'image','ASD-004',6)
producto.addProduct('Libro Cinco','The fifth book',10,'image','ASD-004',6)

producto.getProductosId
