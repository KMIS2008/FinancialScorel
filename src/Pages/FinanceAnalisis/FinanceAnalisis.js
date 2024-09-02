import {Title, TitleItem} from './FinanceAnalisis.styled';
import {LiquidityAnalysisForm} from '../../components/LiquidityAnalysisForm/LiquidityAnalysisForm';
import {FinancialStrength} from '../../components/FinancialStrength/FinancialStrength';
import {IndicatorsOfProfitability} from '../../components/IndicatorsOfProfitability/IndicatorsOfProfitability';
import {IndicatorsAssetEfficiency} from '../../components/IndicatorsAssetEfficiency/IndicatorsAssetEfficiency';
import {OtherIndicatorsProfitability} from '../../components/OtherIndicatorsProfitability/OtherIndicatorsProfitability';
import {Textarea} from '../../components/Textarea/Textarea';

export default function FinanceAnalisis(){
    return(<>
          <Title>  Fiancial analisis </Title>
          <TitleItem>Liquidity analysis</TitleItem>
          <LiquidityAnalysisForm/>
          <TitleItem>Financial strength</TitleItem>
          <FinancialStrength/>
          <TitleItem>Indicators of profitability</TitleItem>
          <IndicatorsOfProfitability/>
          <TitleItem>Indicator asset efficiency</TitleItem>
          <IndicatorsAssetEfficiency/>
          <TitleItem>Other indicators profitability</TitleItem>
          <OtherIndicatorsProfitability/>
          <Textarea/>
          
    </>)
}