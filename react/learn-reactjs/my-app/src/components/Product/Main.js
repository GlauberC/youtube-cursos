import React, {Component} from 'react'
import Product from './Product'

export default class Main extends Component{
    constructor(){
        super()

        this.products = [
            {id: '0001', name: 'Computador', price: '2500,00'},
            {id: '0002', name: 'Mouse', price: '40,00'},
            {id: '0003', name: 'Teclado', price: '55,00'},
            {id: '0004', name: 'Fone de ouvido', price: '25,00'},
            {id: '0005', name: 'Monitor', price: '350,00'},
            {id: '0006', name: 'Estabilizador', price: '150,00'},
            {id: '0007', name: 'Placa de vídeo', price: '950,00'},
            {id: '0008', name: 'Memoria Ram', price: '220,00'},
            {id: '0009', name: 'Processador', price: '600,00'},
            {id: '00010', name: 'Placa mãe', price: '350,00'},
        ]

        this.productComponents = this.products.map( product => 
                        <Product key={product.id} product={product}  />)

    }
    render(){
        return(
            <main className = "content">
                {this.productComponents}
            </main>
        )
    }
}