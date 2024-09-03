import {Container, Number, Tittle, ContainerCurrentRatio, ContainerAnalis, Text, Span} from './FinancialStrength.styled';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchdata} from '../../redux/operations';
import {selectIdData} from '../../redux/data/selects';

export const FinancialStrength=({setFinancialStrength=()=>{}})=>{
    const data = useSelector(selectIdData);
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(fetchdata());
      }, [dispatch]);
    
      const equity = data.length > 0 ? data[data.length - 1].equity : '';
      const totalAssets = data.length > 0 ? data[data.length - 1].totalAssets : '';
      const equityRatio=(equity/totalAssets).toFixed(2);
      
      const liabilities=data.length > 0 ? data[data.length - 1].liabilities : '';
      const debtToEquityRatio=(liabilities/equity).toFixed(2);

      const longTermLiabilities=data.length > 0 ? data[data.length - 1].longTermLiabilities : '';
      const financialStabilityRatio=((+equity + +longTermLiabilities)/totalAssets).toFixed(2);

      
      useEffect(() => {
        setFinancialStrength({ equityRatio, debtToEquityRatio, financialStabilityRatio });
    }, [equityRatio, debtToEquityRatio, financialStabilityRatio, setFinancialStrength]);

    return(
      <>
      <Container>
        <ContainerCurrentRatio>
            <Tittle>Коефіцієнт автономії (Equity Ratio)</Tittle>
            <Number>{equityRatio}</Number>            
        </ContainerCurrentRatio>

        <ContainerCurrentRatio>
            <Tittle>Коефіцієнт фінансового левериджу (Debt to Equity Ratio)</Tittle>
            <Number>{debtToEquityRatio}</Number>            
        </ContainerCurrentRatio>

        <ContainerCurrentRatio>
            <Tittle>Коефіцієнт фінансової стабільності (Financial Stability Ratio)</Tittle>
            <Number>{financialStabilityRatio}</Number>            
        </ContainerCurrentRatio> 
      
      </Container>    

      <ContainerAnalis>
        <li>
          {equityRatio<0.5&&<Text> 1. <Span $Bad>Equity Ratio меньше 0,5.</Span> Може вказувати на підвищену залежність від зовнішніх позик або кредитів, що може підвищувати ризик для підприємства в умовах економічної нестабільності.</Text>}
          {equityRatio>0.5&&<Text> 1. <Span $Good>Equity Ratio більше 0,5.</Span> Вказує, що значна частина активів підприємства фінансується за рахунок власного капіталу, що забезпечує стійкість і незалежність компанії від зовнішніх джерел фінансування.</Text>}
        </li>

       <li>
          {1<debtToEquityRatio<1.5&&<Text> 2. <Span $Good>Debt to Equity Ratio меньше 1,5.</Span>Такий коефіцієнт вважається збалансованим і є ознакою здорової структури капіталу.</Text>}
          {debtToEquityRatio===1&&<Text> 2. <Span>Debt to Equity Ratio равно 1.</Span>Означає, що зобов'язання компанії дорівнюють її власному капіталу. Це свідчить про рівновагу між залученими і власними коштами.</Text>}
          {debtToEquityRatio>2&&<Text> 2. <Span $Bad>Debt to Equity Ratio більше 2.</Span>Підприємство має надмірну залежність від боргів і підвищений ризик.</Text>}
       </li>

       <li>
          {(financialStabilityRatio>0.2&&financialStabilityRatio<0.5)&&<Text> 3. <Span $Good>Financial Stability Ratio більше 0,2 та меньше 0,5.</Span>Це значення важається прийнятним, оскільки підприємство має достатньо грошових коштів для покриття 20-50% своїх короткострокових зобов'язань. Це є показником здорової фінансової позиції, при якій компанія не тримає надмірно великий обсяг грошових коштів без використання.</Text>}
          {financialStabilityRatio>0.5&&<Text> 3. <Span>Financial Stability Ratio більше 0,5.</Span>Це свідчить про те, що компанія має надмірну кількість грошових коштів, які не використовуються ефективно, наприклад, для інвестицій або розвитку бізнесу.</Text>}
          {financialStabilityRatio<0.2&&<Text> 3. <Span $Bad>Financial Stability Ratio меньше 0,2.</Span>Це вказує на потенційні проблеми з ліквідністю, оскільки компанія має недостатньо грошових коштів для швидкого покриття своїх зобов'язань.</Text>}
       </li>
     </ContainerAnalis>

      </>

)
}