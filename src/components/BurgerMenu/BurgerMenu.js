import sprite from '../../images/sprite.svg';
import {Container, CloseIcon} from './BurgerMenu.styled';
import { NavigationLinks } from 'components/NavigateLinks/NavigateLinks';
// import {AuthenticationLinks} from '../AuthenticationLinks/AuthenticationLinks';

export const Burgermenu=({onClose})=>{
    
    return(
        <Container>

              <CloseIcon onClick={onClose}>
                <use xlinkHref={sprite + '#icon-x-1'}/>
              </CloseIcon>

               <NavigationLinks onClose={onClose}/>   
               {/* <AuthenticationLinks/>          */}

        </Container>
    )
}