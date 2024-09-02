import { useNavigate } from 'react-router-dom';
import {Container, Button} from './NavigateLinks.styled';

export const NavigationLinks=({onClose})=>{
    const navigate=useNavigate();
   

    const handleNavigateHome=()=>{
        navigate('/home');
        onClose();
    }

    const handleNavigateLiguidityAnalysis=()=>{
        navigate('/liquidity-analysis')
        onClose();
    }

    const handleNavigateFinancialStrength=()=>{
        navigate('/financia-strength')
        onClose();
    }

    const handleNavigateIndicators=()=>{
        navigate('/indicators-profitability')
        onClose();
    }

    const handleNavigateAssetEfficiency=()=>{
        navigate('/asset-efficiency')
        onClose();
    }

    const handleNavigateOtherIndicators =()=>{
        navigate('/other-indicators')
        onClose();
    }

    const handleFinancialAnalisis =()=>{
        navigate('/financial-analisis')
        onClose();
    }

    return(<Container>
        <Button type='button' onClick={handleNavigateHome}>Home</Button>
        <Button type='button' onClick={handleNavigateLiguidityAnalysis}>Liquidity analysis</Button>
        <Button type='button' onClick={handleNavigateFinancialStrength}>Financial strength</Button>
        <Button type='button' onClick={handleNavigateIndicators}>Indicators of profitability</Button>
        <Button type='button' onClick={handleNavigateAssetEfficiency}>Indicators asset efficiency</Button>
        <Button type='button' onClick={handleNavigateOtherIndicators}>Other indicators profitability</Button>
        <Button type='button' onClick={handleFinancialAnalisis}>Financial analysis </Button>
 
    </Container>)
}