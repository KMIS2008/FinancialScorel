import {Container, Title, Name, Svg} from './Header.styled';
import {Burgermenu} from '../BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';
import sprite from '../../images/sprite.svg';
import {selectIdData} from '../../redux/data/selects';
import { useDispatch, useSelector } from 'react-redux';
import {fetchdata} from '../../redux/operations';
import {NavigationLinks} from '../NavigateLinks/NavigateLinks';

export const Header = () => {
  const [isOpen, setOpen]=useState(false);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1440);
  const data = useSelector(selectIdData);
  const dispatch=useDispatch();

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

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

  const nameCompany = data.length > 0 ? data[data.length - 1].nameCompany : 'Company Name';

  return (
    <Container>
      <Title>Financial scoring</Title>
      <Name>{nameCompany}</Name>

      {isTablet&& <Svg onClick={handleBurgerMenu}>
            <use xlinkHref={sprite + '#icon-burgermenu'} />
          </Svg>}

      {isOpen&&<Burgermenu onClose={handleBurgerMenu}/>}

      {!isTablet&& <NavigationLinks isHeader={true}/>}

    </Container>
  );
}
