import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/CheckoutItem'

import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selectors'

import './checkout.scss'

const CheckOut = ({cartItems,total}) => {

  return (
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>
                    
                    Quantity
                    
                </span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem cartItem={cartItem} key={cartItem.id}></CheckoutItem>)
        }

        <div className="total">
            <span>Total : ${total}</span>
        </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
})

export default connect(mapStateToProps)(CheckOut)