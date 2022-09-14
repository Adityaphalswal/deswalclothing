import React from 'react';
import {Route, Routes,useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/Shop';
import Header from './components/Header/header';
import Sign from './pages/sign/sign';
import {auth,creatUserProfileDocument} from './firebase/firebase.utils';
import {onSnapshot} from 'firebase/firestore';
import './App.css';
import {setCurrentUser} from './redux/user/user.actions';
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
          <Route path="/shop" element={<ShopPage/>} />
          <Route path="/signin" element={<Sign/>} />
        </Routes>
        </>
    );
  }
  
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => 
  dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);
