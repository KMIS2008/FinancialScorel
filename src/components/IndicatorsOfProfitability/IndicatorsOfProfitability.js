import {Container, ContainerCurrentRatio, Tittle, Number, ContainerAnalis, Text, Span}from './IndicatorsOfProfitability.styled';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchdata} from '../../redux/operations';
import {selectIdData} from '../../redux/data/selects';

export const IndicatorsOfProfitability=({setIndicatorsOfProfitability=()=>{}})=>{
  const data = useSelector(selectIdData);
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(fetchdata());
      }, [dispatch]);
    
      const netProfit = data.length > 0 ? data[data.length - 1].netProfit : '';
      const totalAssets = data.length > 0 ? data[data.length - 1].totalAssets : '';
      const returnonAssets=((netProfit/totalAssets)*100).toFixed(2);

      const equity = data.length > 0 ? data[data.length - 1].equity : '';
      const returnOnEquity=((netProfit/equity)*100).toFixed(2);

      const revenue = data.length > 0 ? data[data.length - 1].revenue : '';
      const returnOnSales=((netProfit/revenue)*100).toFixed(2);

      useEffect(()=>{
        setIndicatorsOfProfitability({returnonAssets, returnOnEquity, returnOnSales})
      }, [returnonAssets, returnOnEquity, returnOnSales,setIndicatorsOfProfitability])

    return(
    <>
      <Container>
        <ContainerCurrentRatio>
            <Tittle>Рентабельність активів (ROA) (Return on Assets)</Tittle>
            <Number>{returnonAssets||''}</Number>            
        </ContainerCurrentRatio>

        <ContainerCurrentRatio>
            <Tittle>Рентабельність власного капіталу (ROE) (Return on Equity)</Tittle>
            <Number>{returnOnEquity||''}</Number>            
        </ContainerCurrentRatio>

        <ContainerCurrentRatio>
            <Tittle>Рентабельність продажів (ROS) (Return on Sales)</Tittle>
            <Number>{returnOnSales||''}</Number>            
        </ContainerCurrentRatio>

      </Container>

      <ContainerAnalis>
        <li>
          {((returnonAssets>5&&returnonAssets<10)||returnonAssets===5)&&<Text> 1. <Span>Return on Assets більше 5% меньше 10%.</Span>  Вважається середнім показником рентабельності активів для більшості галузей</Text>}
          {returnonAssets<5&&<Text> 1. <Span $Bad>Return on Assets меньше 5%.</Span> Свідчить про низьку ефективність або капіталомісткість бізнесу (наприклад, виробничі або інфраструктурні компанії).</Text>}
          {returnonAssets>10&&<Text> 1. <Span $Good>Return on Assets більше 10%.</Span>  Дуже ефективне використання активів. Це характерно для компаній з високою рентабельністю, наприклад, у технологічному секторі.</Text>}
        </li>

       <li>
          {returnOnEquity>20&&<Text> 2. <Span $Good>Inventory Turnover Ratio більше 20%.</Span>Це вказує на високу ефективність використання власного капіталу.</Text>}
          {(returnOnEquity<20&&returnOnEquity>10)&&<Text> 2. <Span>Inventory Turnover Ratio быльше 10% меньше 20%.</Span>Це є нормальним для оптимального значення рентабельності власного капіталу для більшості галузей.</Text>}
          {returnOnEquity<10&&<Text> 2. <Span $Bad>Inventory Turnover Ratio меньше 10%.</Span>Це свідчить про проблеми з прибутковістю або неефективне управління власним капіталом.</Text>}
       </li>

       <li>
          {returnOnSales>10&&<Text> 3. <Span $Good>Accounts Receivable Turnover Ratio більше 10%.</Span>Високий показник рентабельності продажів, що свідчить про ефективне управління витратами та прибутковість.</Text>}
          {(returnOnSales>5&&returnOnSales<10)&&<Text> 3. <Span>Accounts Receivable Turnover Ratio більше 5% та меньше10%.</Span>Середній показник, характерний для багатьох стабільних галузей.</Text>}
          {returnOnSales<5&&<Text> 3. <Span $Bad>Accounts Receivable Turnover Ratio меньше 5%.</Span>Низький показник, який може свідчити про проблеми з прибутковістю або високу конкуренцію в галузі.</Text>}
       </li>
     </ContainerAnalis>
    </>)
}