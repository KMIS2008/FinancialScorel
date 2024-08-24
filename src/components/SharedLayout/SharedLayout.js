import { Suspense } from "react";
import { Outlet, useLocation} from "react-router-dom";
import {Contater} from './SharedLayout.styled';
import {Header} from '../Header/Header';
import {Footer} from '../../components/Footer/Footer';

 const SharedLayout=()=>{
    const location= useLocation();

    const isHome = location.pathname === '/home';
    const isMain=location.pathname==='/';
    
    return (
        <Contater>
            <Header/>
                <main>
                   <Suspense fallback={<div>Loading...</div>}>
                      <Outlet />
                   </Suspense>
                </main>   
           {(isMain||isHome) && <Footer/>}
        </Contater>
    )
}

export default SharedLayout;