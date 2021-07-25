import './style.css'
const ProductCardModal = props => {
    return (
        <div className="productCardModal">
            <div className="productCardModal-imgWrapper">
                <img className="productCardModal-img" src="https://img.icons8.com/emoji/256/coin-emoji.png" alt="Imagem produto" />
            </div>
            <div className="productCardModal-InfoBtn">
                <div className="productCardModal-info">
                    <h3>{props.data.name}</h3>
                    <h4>{`R$ ${props.data.price}`}</h4>
                </div>
                <div className="productCardModal-btn">                
                    <img className="productCardModal-img" src="https://img.icons8.com/glyph-neue/128/fa314a/trash.png" alt="lixeira"/>
                </div>
            </div>
        </div>
    )
}
export default ProductCardModal