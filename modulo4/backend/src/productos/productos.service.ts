import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {
    private productos = [{
        "producto": "Papa",
        "precio": 50,
        "descripcion": "-"
    }, {
        "producto": "Pera",
        "precio": 70,
        "descripcion": "-"
    }, {
        "producto": "Cebolla",
        "precio": 40,
        "descripcion": "-"
    }, {
        "producto": "Tomate",
        "precio": 100,
        "descripcion": "-"
    }, {
        "producto": "Morron",
        "precio": 200,
        "descripcion": "-"
    }, {
        "producto": "Arroz",
        "precio": 35,
        "descripcion": "-"
    }, {
        "producto": "Aceite",
        "precio": 60,
        "descripcion": "-"
    }]
    private static readonly CANTIDAD_PRODUCTOS = 10;
    public getProductos(): any {
        // let productos = [];
        // for (let i = 0; i < ProductosService.CANTIDAD_PRODUCTOS; i++) {
        //     let producto = {
        //         'producto': 'producto_' + i,
        //         'precio': Math.floor(Math.random() * 100),
        //         'descripcion': 'descripcion_' + i
        //     };
        //     productos.push(producto);
        // }
        // return productos;


        
        return this.productos;
    }

    public getProducto(p1 : number, p2 : number, p3 : number, p4 : number): any {
        let retorno = [];
        for (let i=0; i<ProductosService.CANTIDAD_PRODUCTOS; i++) {
            if (i==p1 || i==p2 || i==p3 || i==p4) {
                let producto = this.productos[i];
                retorno.push(producto);
            }
        }
        return retorno;
    }
}
