import React from 'react'
import ProductCardModal from '../ProductCardModal'
import './style.css'
const ModalCart = props => {
    const productsInCart = [
        { qtnd: 1, name: 'Product1', price: 25.80},
        { qtnd: 1, name: 'Product2', price: 12.90},
        { qtnd: 1, name: 'Product2', price: 12.90},
        { qtnd: 1, name: 'Product2', price: 12.90},
       
    ]
    let totalPrice = 0
    let key=0
    productsInCart.forEach(record => {
        totalPrice += record.price
    })
    return (
        <div className={`modalCart ${props.class}`}>
            <h2 className="modalCart-saldo">Saldo atual:</h2>
            <h3 className="modalCart-saldoValue">R$900.00</h3>
            <div className="modalCart-products">
                {                    
                    productsInCart.map((productsInCart) =>                     
                    <ProductCardModal key={key++} data={{ name: productsInCart.name, price: productsInCart.price.toFixed(2) }} />)             
                }

           
            </div>
            <h3 className="modalCart-totalValue">{`Total da compra: R$${totalPrice}`}</h3>
            <button className="modalCart-finishBtn">Finalizar compra</button>
        </div>
    )
}
export default ModalCart