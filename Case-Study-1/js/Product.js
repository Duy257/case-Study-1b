class Product {
    image;
    name;
    price;
    quantity;
    type;

    constructor(image, name, price, quantity, type) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.type = type;
    }

    setQuantity (quantity) {
        this.quantity = quantity;
    }

    getQuantity () {
        return this.quantity;
    }

    getImage() {
        return this.image;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
    
    getType() {
        return this.type;
    }
}