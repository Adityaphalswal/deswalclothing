import React from 'react'
import {Routes,Route,useLocation, useNavigate,useParams,useMatch} from 'react-router-dom'
import Collectionoverview from '../../components/collections-overview/Collectionoverview';
import CategoryPage from '../category/Category.jsx';

const ShopPage = () =>  {
  let match = useLocation();
  console.log(match)
    return (
      <div className='shop-page'>
        <Routes>
        <Route exact path={`${match.path}`} element={ <Collectionoverview/>}>
          
        </Route> 
        <Route path={`/:categoryId`}
        element={<CategoryPage/>} ></Route>
        </Routes>
      </div>
    )
}



export default ShopPage;
