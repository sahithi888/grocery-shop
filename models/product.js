export default class Product {
    p_id;
    c_id;
    prod_name;
    cat_name;
    price;
    decs;
    quantity;
    img;
    constructor(p_id, c_id, prod_name, cat_name, price,decs, quantity, img){
        this.p_id = p_id;
        this.c_id = c_id;
        this.prod_name = prod_name;
        this.cat_name = cat_name;
        this.price = price;
        this.decs=decs;
        this.quantity = quantity;
        this.img = img;
    }
}