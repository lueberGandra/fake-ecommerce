import ModalCart from '../Components/ModalCart'
import {connect} from 'react-redux'
import {addToCart} from '../Service/actions/actions'

const mapStateToProps=state=>({
     data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(ModalCart)
