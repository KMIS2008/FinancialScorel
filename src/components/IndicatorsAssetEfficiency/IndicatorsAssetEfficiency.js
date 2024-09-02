import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchdata} from '../../redux/operations';
import {selectIdData} from '../../redux/data/selects';
import {Container,ContainerCurrentRatio, Number, ContainerAnalis, Text, Span} from './IndicatorsAssetEfficiency.styled';

export const IndicatorsAssetEfficiency =()=>{
    const data = useSelector(selectIdData);
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(fetchdata());
      }, [dispatch]);

    const totalAssets = data.length > 0 ? data[data.length - 1].totalAssets : '';
    const revenue = data.length > 0 ? data[data.length - 1].revenue : '';
    const assetTurnoverRatio=(revenue/totalAssets).toFixed(2);

    const cost = data.length > 0 ? data[data.length - 1].cost : '';
    const stocksFirst = data.length > 0 ? data[data.length - 1].stocksFirst : '';
    const stocksFinish = data.length > 0 ? data[data.length - 1].stocksFinish : '';
    const inventoryTurnoverRatio=(cost/((+stocksFirst + +stocksFinish)/2)).toFixed(2);

    const accountsReceivableFist = data.length > 0 ? data[data.length - 1].accountsReceivableFist : '';
    const accountsReceivableFinish = data.length > 0 ? data[data.length - 1].accountsReceivableFinish : '';
    const accountsReceivableTurnoverRatio=(revenue/((+accountsReceivableFist + +accountsReceivableFinish)/2)).toFixed(2);

    return(
    <>
          <Container>
        <ContainerCurrentRatio>
            <h5>Коефіцієнт оборотності активів (Asset Turnover Ratio)</h5>
            <Number>{assetTurnoverRatio}</Number>            
        </ContainerCurrentRatio>

        <ContainerCurrentRatio>
            <h5>Коефіцієнт оборотності запасів (Inventory Turnover Ratio)</h5>
            <Number>{inventoryTurnoverRatio}</Number>            
        </ContainerCurrentRatio>

        <ContainerCurrentRatio>
            <h5>Коефіцієнт оборотності дебіторської заборгованості (Accounts Receivable Turnover Ratio)</h5>
            <Number>{accountsReceivableTurnoverRatio}</Number>            
        </ContainerCurrentRatio>

      </Container>

      <ContainerAnalis>
        <li>
          {assetTurnoverRatio<1&&<Text> 1. <Span $Bad>Asset Turnover Ratio меньше 1.</Span> Вказує на неефективне використання активів або на високу капіталомісткість галузі. Це характерно для компаній, які потребують великих інвестицій в активи, таких як виробничі або інфраструктурні компанії.</Text>}
          {assetTurnoverRatio>1&&<Text> 1. <Span $Good>Asset Turnover Ratio більше 1.</Span>  Вказує на високу ефективність використання активів. Компанія генерує значні обсяги виручки на кожен долар або гривню активів. Це характерно для компаній, які працюють в галузях з низькими капітальними витратами (наприклад, роздрібна торгівля).</Text>}
        </li>

       <li>
          {inventoryTurnoverRatio>5&&<Text> 2. <Span $Good>Inventory Turnover Ratio більше 5.</Span>Означає, що запаси швидко продаються і не залишаються довго на складі.</Text>}
          {(inventoryTurnoverRatio<3&&inventoryTurnoverRatio>1)&&<Text> 2. <Span>Inventory Turnover Ratio быльше 1 меньше 3.</Span>Це є нормальним для компаній з великими обсягами запасів або для галузей з повільнішим оборотом товарів.</Text>}
          {inventoryTurnoverRatio<1&&<Text> 2. <Span $Bad>Inventory Turnover Ratio меньше 1.</Span>Це свідчить про проблеми з реалізацією продукції або надмірні запаси.</Text>}
       </li>

       <li>
          {accountsReceivableTurnoverRatio>5&&<Text> 3. <Span $Good>Accounts Receivable Turnover Ratio більше 5.</Span>Вказує на те, що компанія ефективно збирає дебіторську заборгованість, що добре для її ліквідності та грошових потоків.</Text>}
          {(accountsReceivableTurnoverRatio>3&&accountsReceivableTurnoverRatio<5)&&<Text> 3. <Span>Accounts Receivable Turnover Ratio більше 3 та меньше5.</Span>Вказує на можливість покращення кредитної політики або процесу збору платежів.</Text>}
          {accountsReceivableTurnoverRatio<3&&<Text> 3. <Span $Bad>Accounts Receivable Turnover Ratio меньше 3.</Span>Вказує на низьку ефективність збору платежів і може бути ознакою проблем із ліквідністю, оскільки компанія може мати значні труднощі зі збором своїх доходів.</Text>}
       </li>
     </ContainerAnalis>
    </>
    )
}