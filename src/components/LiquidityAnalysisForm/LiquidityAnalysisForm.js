import {Container, Number, ContainerCurrentRatio,ContainerAnalis, Span, Text} from './LiquidityAnalysisForm.styled';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchdata} from '../../redux/operations';
import {selectIdData} from '../../redux/data/selects';

export const LiquidityAnalysisForm=()=>{
    const data = useSelector(selectIdData);
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(fetchdata());
      }, [dispatch]);
    
      const currentAssets = data.length > 0 ? data[data.length - 1].currentAssets : '';
      const currentLiabilities = data.length > 0 ? data[data.length - 1].currentLiabilities : '';
      const currentRatio=(currentAssets/currentLiabilities).toFixed(2);

      const stocks= data.length > 0 ? data[data.length - 1].stocks : '';
      const quickRatio=((currentAssets-stocks)/currentLiabilities).toFixed(2);

      const money=data.length > 0 ? data[data.length - 1].money : '';
      const cashRatio=(money/currentLiabilities).toFixed(2);

    return(
      <>
      <Container>
        <ContainerCurrentRatio>
            <h5>Коефіцієнт поточної ліквідності (Current Ratio)</h5>
            <Number>{currentRatio}</Number>            
        </ContainerCurrentRatio>

        <ContainerCurrentRatio>
            <h5>Коефіцієнт швидкої ліквідності (Quick Ratio)</h5>
            <Number>{quickRatio}</Number>            
        </ContainerCurrentRatio>

        <ContainerCurrentRatio>
            <h5>Коефіцієнт абсолютної ліквідності (Cash Ratio)</h5>
            <Number>{cashRatio}</Number>            
        </ContainerCurrentRatio>

      </Container>
      
      <ContainerAnalis>
        <li>
          {currentRatio<1&&<Text> 1. <Span $Bad>Current Ratio меньше 1.</Span> Це свідчить про потенційні проблеми з ліквідністю, оскільки підприємство може не мати достатньо активів для покриття зобов'язань.</Text>}
          {1.5<currentRatio<2.5&&<Text> 1. <Span $Good>Current Ratio більше 1,5  та меньше 2,5.</Span> Це свідчить, що підприємство має достатньо ліквідності для покриття зобов'язань і при цьому не тримає надлишкові активи, які могли б бути краще використані.</Text>}
        </li>

       <li>
          {quickRatio<1&&<Text> 2. <Span $Bad>Quick Ratio меньше 1.</Span>Це свідчить про можливі проблеми з ліквідністю, оскільки підприємству може знадобитися продати запаси або залучити додаткові кошти для виконання зобов'язань.</Text>}
          {quickRatio===1&&<Text> 2. <Span>Quick Ratio равно 1.</Span>Компанія може виконати свої короткострокові зобов'язання без необхідності продажу запасів.</Text>}
          {quickRatio>1&&<Text> 2. <Span $Good>Quick Ratio більше 1.</Span>Підприємство має достатньо ліквідних активів (крім запасів), щоб покрити свої короткострокові зобов'язання.</Text>}
       </li>

       <li>
          {(cashRatio>0.2&&cashRatio<0.5)&&<Text> 3. <Span $Good>Cash Ratio більше 0,2 та меньше 0,5.</Span>Це значення важається прийнятним, оскільки підприємство має достатньо грошових коштів для покриття 20-50% своїх короткострокових зобов'язань. Це є показником здорової фінансової позиції, при якій компанія не тримає надмірно великий обсяг грошових коштів без використання.</Text>}
          {cashRatio>0.5&&<Text> 3. <Span>Cash Ratio більше 0,5.</Span>Це свідчить про те, що компанія має надмірну кількість грошових коштів, які не використовуються ефективно, наприклад, для інвестицій або розвитку бізнесу.</Text>}
          {cashRatio<0.2&&<Text> 3. <Span $Bad>Cash Ratio меньше 0,2.</Span>Це вказує на потенційні проблеми з ліквідністю, оскільки компанія має недостатньо грошових коштів для швидкого покриття своїх зобов'язань.</Text>}
       </li>
     </ContainerAnalis>
       </>
)
}