import React from 'react';
import {Route, Routes,useNavigate,Navigate} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/Shop';
import Header from './components/Header/header';
import Sign from './pages/sign/sign';
import CheckOut from './pages/checkout/CheckOut';
import {auth,creatUserProfileDocument} from './firebase/firebase.utils';
import {onSnapshot} from 'firebase/firestore';
import './App.css';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors'

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await creatUserProfileDocument(userAuth);
        onSnapshot(userRef,(snapshot) => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
        });
      } else 
      {
        setCurrentUser(userAuth)
      };
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }  

  render() {
    return (
      <>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
          <Route path="/shop/*" element={<ShopPage/>} />
          {/* <Route exact path="/signin" element={<Sign/>} /> */}
          
          <Route exact path="/signin"
           element={this.props.currentUser ? <Navigate to="/" /> : <Sign/>} />
           <Route exact path="/checkout" element={<CheckOut/>} />
        </Routes>
        </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => 
  dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
