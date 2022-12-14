import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.scss';
const Header = ({currentUser,hidden}) => {
  return (
    <div className='header'>
        <Link className='logo-container' to ='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className="options">
            <Link className='option' to="/shop">SHOP </Link>
            <Link className='option' to="/contact">CONTACT</Link>
            {
              currentUser ?
              <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> : 
              <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
          hidden ? null
          : <CartDropdown/>
        }
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   currentUser : selectCurrentUser(state),
//   hidden : selectCartHidden(state)
// })

const mapStateToProps =  createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden : selectCartHidden
})
export default connect(mapStateToProps)(Header)