import { Injectable } from '@angular/core';
import { Product } from './product';


@Injectable()

export class ProductService {
    constructor( private product: Product){}
    getProduct(): Product{
        this.product.name = "abc";
        this.product.releaseDate = "bnx";
        this.product.description = "none";

        return this.product;
    }
}