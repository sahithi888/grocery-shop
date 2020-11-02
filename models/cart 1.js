export default class Cart{
    cart_id;
    prod_name;
    price;
    quantity;
    img;
    userid;

    constructor(cart_id, prod_name, price, quantity, img, userid){
        this.cart_id = cart_id;
        this.prod_name = prod_name;
        this.price = price;
        this.quantity = quantity;
        this.img = img;
        this.userid = userid;
    }
}