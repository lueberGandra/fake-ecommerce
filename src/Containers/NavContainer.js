import Nav from '../Components/Nav'
import {connect} from 'react-redux'
import {addToCart,removeToCart} from '../Service/actions/actions'

const mapStateToProps=state=>({
     data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:()=>dispatch(removeToCart())

})
export default connect(mapStateToProps,mapDispatchToProps)(Nav)
