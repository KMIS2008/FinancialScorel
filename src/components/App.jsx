import { GlobalStyle } from './GlobalStyle';
import { Audio } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';

import {useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import { useAuth } from 'hook/useAuth';
import { refreshUser } from 'redux/auth/operations';
// import { RestrictedRoute } from './RestrictedRoute'; 
// import { PrivateRoute } from './PrivateRoute';

import { lazy, Suspense  } from 'react';

const Home = lazy(()=> import('Pages/Home/Home'));
const LiquidityAnalysis= lazy(()=> import('Pages/LiquidityAnalysis/LiquidityAnalysis'));
const FinancialStrength= lazy(()=> import('Pages/FinancialStrength/FinancialStrength'));
const IndicatorsProfitability =lazy(()=> import('Pages/IndicatorsProfitability/IndicatorsProfitability'));
const AssetEfficiency=lazy(()=> import('Pages/AssetEfficiency/AssetEfficiency'));

const ErrorPage = lazy(()=> import ('Pages/ErrorPage/ErrorPage'));

    export const App =()=> {
      const dispatch = useDispatch();

      const { isRefreshing } = useAuth();
    
      useEffect(() => {
        dispatch(refreshUser());
    
      }, [dispatch]);
    
      return isRefreshing ? (
        <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
  ) : (
<div>
<Suspense fallback={       
        <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />}>
          <Routes>
             <Route path = "/" element = {<SharedLayout/>}>
             <Route index element={<Navigate to="/home" />} />
             <Route path="home" element={<Home/>}/>
              <Route path="liquidity-analysis" element={<LiquidityAnalysis/>}/>
              <Route path="financia-strength" element={<FinancialStrength/>}/>
              <Route path="indicators-profitability" element={<IndicatorsProfitability/>}/>
              <Route path="asset-efficiency" element={<AssetEfficiency/>}/>

            {/* //  <Route path = "login" element ={<RestrictedRoute redirectTo="/" component={<LoginPage/>} />}/>
            //  <Route path="cart" element={ <PrivateRoute redirectTo="/login" component={<CartPage/>} />}/>  */}
             <Route path="*" element={<ErrorPage/>} />
            </Route>
          </Routes>
          </Suspense>

     <GlobalStyle/>
</div>
  )
    };
    
