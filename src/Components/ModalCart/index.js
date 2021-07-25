import React, { useState } from 'react'
import ProductCardModal from '../../Containers/ProductCardModalContainer'
import './style.css'
const ModalCart = props => {
   
    const [wallet, setWallet] = useState(900)
    let totalPrice = 0
    let key = 0
    const finish = () => {
        setWallet(wallet - totalPrice)
        props.data.length = 0
    }


    const productsInCart = props.data
    productsInCart.forEach(record => {
        totalPrice += parseFloat(record.cardData.price)
    })
   
    return (
        <div className={`modalCart ${props.class}`}>
            <h2 className="modalCart-saldo">Carteira:</h2>
            <h3 className="modalCart-saldoValue">{`R$ ${wallet.toFixed(2)}`}</h3>
            <div className="modalCart-products">
                {
                    productsInCart.map((productsInCart) =>
                        <ProductCardModal key={key++} data={{ name: productsInCart.cardData.name, price: productsInCart.cardData.price,img:productsInCart.cardData.img }} />)
                }
            </div>         
            <h3 className="modalCart-totalValue">{
                totalPrice===0?`Carrinho Vazio`:` Total da compra: R$${totalPrice.toFixed(2)}`
                }</h3>
            <button className="modalCart-finishBtn" onClick={() => { finish() }}>Finalizar compra</button>
        </div>
    )
}
export default ModalCart