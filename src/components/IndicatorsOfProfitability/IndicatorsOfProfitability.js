import {Container, ContainerCurrentRatio, Number}from './IndicatorsOfProfitability.styled';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchdata} from '../../redux/operations';
import {selectIdData} from '../../redux/data/selects';

export const IndicatorsOfProfitability=()=>{
  const data = useSelector(selectIdData);
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(fetchdata());
      }, [dispatch]);
    
      const netProfit = data.length > 0 ? data[data.length - 1].netProfit : '';
      const totalAssets = data.length > 0 ? data[data.length - 1].totalAssets : '';
      const returnonAssets=(netProfit/totalAssets).toFixed(2);

      const equity = data.length > 0 ? data[data.length - 1].equity : '';
      const returnOnEquity=(netProfit/equity).toFixed(2);

      const revenue = data.length > 0 ? data[data.length - 1].revenue : '';
      const returnOnSales=(netProfit/revenue).toFixed(2);

    return(
    <>
      <Container>
        <ContainerCurrentRatio>
            <h5>Рентабельність активів (ROA) (Return on Assets)</h5>
            <Number>{returnonAssets}</Number>            
        </ContainerCurrentRatio>

        <ContainerCurrentRatio>
            <h5>Рентабельність власного капіталу (ROE) (Return on Equity)</h5>
            <Number>{returnOnEquity}</Number>            
        </ContainerCurrentRatio>

        <ContainerCurrentRatio>
            <h5>Рентабельність продажів (ROS) (Return on Sales)</h5>
            <Number>{returnOnSales}</Number>            
        </ContainerCurrentRatio>

      </Container>
    </>)
}