import React from 'react';
import {BrowserRouter as Router, Route, Routes,useNavigate} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/Shop';
import Header from './components/Header/header';
import Sign from './pages/sign/sign';
import {auth,creatUserProfileDocument} from './firebase/firebase.utils';
import {onSnapshot} from 'firebase/firestore';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await creatUserProfileDocument(userAuth);
        onSnapshot(userRef,(snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
          console.log(this.state);  
        });
      } else 
      {
        this.setState({currentUser: userAuth})
      };
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
