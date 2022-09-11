import React from 'react';
import {BrowserRouter as Router, Route, Routes,useNavigate} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/Shop';
import Header from './components/Header/header';
import Sign from './pages/sign/sign';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {this.setState({currentUser: user});
    console.log(user)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }  

  render() {
    return (
      <Router>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
          <Route path="/shop" element={<ShopPage/>} />
          <Route path="/signin" element={<Sign/>} />
        </Routes>
      </Router> 
    );
  }
  
}

export default App;
