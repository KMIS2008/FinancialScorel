import {Container,ContainerCurrentRatio, Number,Tittle, ContainerAnalis, Text, Span} from './OtherIndicatorsProfitability.styled';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchdata} from '../../redux/operations';
import {selectIdData} from '../../redux/data/selects';

export const OtherIndicatorsProfitability=({setOtherIndicatorsProfitability=()=>{}})=>{
    const data = useSelector(selectIdData);
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(fetchdata());
      }, [dispatch]);

    const netProfit = data.length > 0 ? data[data.length - 1].netProfit : '';
    const longTermFinancialInvestments= data.length > 0 ? data[data.length - 1].longTermFinancialInvestments : '';
    const currentFinancialInvestments= data.length > 0 ? data[data.length - 1].currentFinancialInvestments : '';
    const returnOnInvestment=((netProfit/(+longTermFinancialInvestments + +currentFinancialInvestments))*100).toFixed(2);

    const operatingProfit= data.length > 0 ? data[data.length - 1].operatingProfit : '';
    const interestExpenses = data.length > 0 ? data[data.length - 1].interestExpenses : '';
    const interestCoverageRatio=(operatingProfit/interestExpenses).toFixed(2);

    useEffect(()=>{
      setOtherIndicatorsProfitability({returnOnInvestment, interestCoverageRatio})
    }, [returnOnInvestment, interestCoverageRatio, setOtherIndicatorsProfitability])


    return(<>
           <Container>
        <ContainerCurrentRatio>
            <Tittle>Чиста рентабельність капіталовкладень (ROI) (Return on Investment)</Tittle>
            <Number>{returnOnInvestment||''}</Number>            
        </ContainerCurrentRatio>

        <ContainerCurrentRatio>
            <Tittle>Коефіцієнт покриття відсотків (Interest Coverage Ratio)</Tittle>
            <Number>{interestCoverageRatio||''}</Number>            
        </ContainerCurrentRatio>

      </Container>

      <ContainerAnalis>
        <li>
          {returnOnInvestment<10&&<Text> 1. <Span $Bad>Return on Investment меньше 10%.</Span> Це свідчить на необхідність перегляду інвестиційної стратегії або на довгостроковий характер інвестицій.</Text>}
          {(returnOnInvestment<15&&returnOnInvestment>10)&&<Text> 1. <Span>Return on Investment більше 10%  та меньше 15%.</Span> Прийнятний показник для стабільних галузей з низьким рівнем ризику.</Text>}
          {(returnOnInvestment<30&&returnOnInvestment>15)&&<Text> 1. <Span $Good>Return on Investment більше 15%  та меньше 30%.</Span> Хороший показник для більшості бізнесів і галузей.</Text>}
          {returnOnInvestment>30&&<Text> 1. <Span $Good>Return on Investment більше 30%.</Span> Дуже високий рівень рентабельності інвестицій, що свідчить про високий прибуток від вкладених коштів.</Text>}
        </li>

       <li>
          {interestCoverageRatio<1.5&&<Text> 2. <Span $Bad>Interest Coverage Ratio меньше 1.5.</Span>Низький показник, який може свідчити про потенційні проблеми з ліквідністю та здатністю обслуговувати борг.</Text>}
          {(interestCoverageRatio>1.5&&interestCoverageRatio<3)&&<Text> 2. <Span>Interest Coverage Ratio більше 1,5 меньше 3.</Span>Прийнятний рівень, але компанія може бути вразливою до зниження прибутковості.</Text>}
          {interestCoverageRatio>3&&<Text> 2. <Span $Good>Interest Coverage Ratio більше 3.</Span>Хороший рівень покриття відсотків, що свідчить про фінансову стабільність компанії і її здатність легко обслуговувати свої боргові зобов'язання.</Text>}
       </li>
     </ContainerAnalis>
    </>)
}