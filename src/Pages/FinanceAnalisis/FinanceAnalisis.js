import {Title, TitleItem, SubmitButton} from './FinanceAnalisis.styled';
import {LiquidityAnalysisForm} from '../../components/LiquidityAnalysisForm/LiquidityAnalysisForm';
import {FinancialStrength} from '../../components/FinancialStrength/FinancialStrength';
import {IndicatorsOfProfitability} from '../../components/IndicatorsOfProfitability/IndicatorsOfProfitability';
import {IndicatorsAssetEfficiency} from '../../components/IndicatorsAssetEfficiency/IndicatorsAssetEfficiency';
import {OtherIndicatorsProfitability} from '../../components/OtherIndicatorsProfitability/OtherIndicatorsProfitability';
import {Textarea} from '../../components/Textarea/Textarea';
import { useState } from 'react';

import React, { useRef } from 'react';
import htmlDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';

export default function FinanceAnalisis(){
    const contentRef = useRef();

    // Функція для експорту в DOCX
    const handleExport = () => {
      // Отримуємо HTML-контент з елемента
      const content = contentRef.current.innerHTML;
  
      // Конвертуємо HTML-контент в формат DOCX
      const docx = htmlDocx.asBlob(content);
  
      // Завантажуємо DOCX-файл
      saveAs(docx, 'document.docx');
    };
    
    const [liquidityRatios, setLiquidityRatios] = useState({
        currentRatio: '',
        quickRatio: '',
        cashRatio: ''
    });
    const [isFinancialStrength, setFinancialStrength] =useState({
        equityRatio:'',
        debtToEquityRatio: '',
        financialStabilityRatio: '' })
    const [isIndicatorsOfProfitability, setIndicatorsOfProfitability]=useState({
        returnonAssets: "", 
        returnOnEquity: '', 
        returnOnSales: '',
    })
    const [isIndicatorsAssetEfficiency, setIndicatorsAssetEfficiency]=useState({
        assetTurnoverRatio: '',
        inventoryTurnoverRatio:'',
        accountsReceivableTurnoverRatio: '',
    })
    const [isOtherIndicatorsProfitability, setOtherIndicatorsProfitability]=useState({
        returnOnInvestment:'', 
        interestCoverageRatio:'',
    })
    
    return(<>
    <div ref={contentRef}>
          <Title>  Fiancial analisis </Title>
          <TitleItem>Liquidity analysis</TitleItem>
          <LiquidityAnalysisForm setLiquidityRatios={setLiquidityRatios} liquidityRatios={liquidityRatios}/>
          <TitleItem>Financial strength</TitleItem>
          <FinancialStrength setFinancialStrength={setFinancialStrength}/>
          <TitleItem>Indicators of profitability</TitleItem>
          <IndicatorsOfProfitability setIndicatorsOfProfitability={setIndicatorsOfProfitability}/>
          <TitleItem>Indicator asset efficiency</TitleItem>
          <IndicatorsAssetEfficiency setIndicatorsAssetEfficiency={setIndicatorsAssetEfficiency}/>
          <TitleItem>Other indicators profitability</TitleItem>
          <OtherIndicatorsProfitability setOtherIndicatorsProfitability={setOtherIndicatorsProfitability}/>
          <Textarea liquidityRatios={liquidityRatios} 
                    isFinancialStrength={isFinancialStrength} 
                    isIndicatorsOfProfitability={isIndicatorsOfProfitability}
                    isIndicatorsAssetEfficiency={isIndicatorsAssetEfficiency}
                    isOtherIndicatorsProfitability={isOtherIndicatorsProfitability}/>

          
    </div>
    
         <SubmitButton type='button' onClick={handleExport}>Експортувати в DOCX</SubmitButton>
    </>)
}