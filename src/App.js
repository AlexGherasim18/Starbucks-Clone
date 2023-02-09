import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Menu from './routes/menu/menu.component';
import Footer from './routes/footer/footer.component';
import SignIn from './routes/sign-in-form/sign-in-form.component';
import SignUp from './routes/sign-up-form/sign-up-form.component';
import Featured from './routes/featuredpage/featured.component';
import PreviousOrders from './routes/previous-orders/previous.component';
import FavoriteProducts from './routes/favoriteproducts/favoriteproducts.component';
import Rewards from './routes/rewards/rewards.component';
import GiftCard from './routes/gift-card/gift-card.component';
import { useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    })
    
    return unsubscribe;
  }, []);  
  return (
    <Routes>
      <Route path='/' element={<Footer />}>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path='menu/*' element={<Menu />} />
          <Route path='sign-in' element={<SignIn />}/>
          <Route path='sign-up' element={<SignUp />}/>
          <Route path='menu/featured' element={<Featured />}/>
          <Route path='menu/previous' element={<PreviousOrders />}/>
          <Route path='menu/favorites' element={<FavoriteProducts />}/>
          <Route path='rewards' element={<Rewards />}/>
          <Route path='gift' element={<GiftCard />}/>
        </Route>
      </Route>  
    </Routes>
  );
}

export default App;
