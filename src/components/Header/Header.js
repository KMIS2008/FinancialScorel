import {Container, Title, Name, Svg} from './Header.styled';
import {Burgermenu} from '../BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';
import sprite from '../../images/sprite.svg';

export const Header = () => {
  const [isOpen, setOpen]=useState(false);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1440);

  const handleBurgerMenu = () => {
    setOpen(!isOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1440);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <Title>Financial scoring</Title>
      <Name>dgfdfhdfhdfh</Name>

      {isTablet&& <Svg onClick={handleBurgerMenu}>
            <use xlinkHref={sprite + '#icon-burgermenu'} />
          </Svg>}
      {isOpen&&<Burgermenu onClose={handleBurgerMenu}/>}
    </Container>
  );
}
