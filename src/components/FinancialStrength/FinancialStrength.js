import {Container, Number, ContainerCurrentRatio} from './FinancialStrength.styled';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchdata} from '../../redux/operations';
import {selectIdData} from '../../redux/data/selects';

export const FinancialStrength=()=>{
    const data = useSelector(selectIdData);
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(fetchdata());
      }, [dispatch]);
    

      const equity = data.length > 0 ? data[data.length - 1].equity : '';
      const totalAssets = data.length > 0 ? data[data.length - 1].totalAssets : '';
      const equityRatio=(equity/totalAssets).toFixed(2);
      

    return(
      <Container>
        <ContainerCurrentRatio>
            <h5>Коефіцієнт автономії (Equity Ratio)</h5>
            <Number>{equityRatio}</Number>            
        </ContainerCurrentRatio>

        <ContainerCurrentRatio>
            <h5>Коефіцієнт фінансового левериджу (Debt to Equity Ratio)</h5>
            <Number>{2}</Number>            
        </ContainerCurrentRatio>

        <ContainerCurrentRatio>
            <h5>Коефіцієнт абсолютної ліквідності (Cash Ratio)</h5>
            <Number>{3}</Number>            
        </ContainerCurrentRatio> 
      
      </Container>
)
}