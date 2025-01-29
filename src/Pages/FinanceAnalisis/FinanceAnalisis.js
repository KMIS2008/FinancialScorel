import {Title, TitleItem, SubmitButton} from './FinanceAnalisis.styled';
import {LiquidityAnalysisForm} from '../../components/LiquidityAnalysisForm/LiquidityAnalysisForm';
import {FinancialStrength} from '../../components/FinancialStrength/FinancialStrength';
import {IndicatorsOfProfitability} from '../../components/IndicatorsOfProfitability/IndicatorsOfProfitability';
import {IndicatorsAssetEfficiency} from '../../components/IndicatorsAssetEfficiency/IndicatorsAssetEfficiency';
import {OtherIndicatorsProfitability} from '../../components/OtherIndicatorsProfitability/OtherIndicatorsProfitability';
import {Textarea} from '../../components/Textarea/Textarea';

import React, { useRef } from 'react';
import htmlDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';

export default function FinanceAnalisis(){
    const contentRef = useRef();

    const handleExport = () => {

      const content = contentRef.current.innerHTML;
  
      const docx = htmlDocx.asBlob(content);
  
      saveAs(docx, 'document.docx');
    };
    
    
    return(<>

    <div ref={contentRef}>
          <Title>  Fiancial analisis </Title>
          <TitleItem>Liquidity analysis</TitleItem>
          <LiquidityAnalysisForm />
          <TitleItem>Financial strength</TitleItem>
          <FinancialStrength/>
          <TitleItem>Indicators of profitability</TitleItem>
          <IndicatorsOfProfitability />
          <TitleItem>Indicator asset efficiency</TitleItem>
          <IndicatorsAssetEfficiency/>
          <TitleItem>Other indicators profitability</TitleItem>
          <OtherIndicatorsProfitability />
          <Textarea />
    </div>
         <SubmitButton type='button' onClick={handleExport}>Експортувати в DOCX</SubmitButton> 
    </>)
}