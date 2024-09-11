import { useNavigate, useLocation } from 'react-router-dom';
import {Container, Button} from './NavigateLinks.styled';

export const NavigationLinks=({onClose=()=>{}, isHeader=false})=>{
    const navigate=useNavigate();
    const location = useLocation(); 

    const isActive = (path) => location.pathname === path;

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

    return(
    <Container $isHeader={isHeader}>
        <Button $isHeader={isHeader} 
                $isActive={isActive('/home')}
                type='button' 
                onClick={handleNavigateHome}
                >Home</Button>
        <Button $isHeader={isHeader} 
                $isActive={isActive('/liquidity-analysis')}
                type='button' 
                onClick={handleNavigateLiguidityAnalysis}
                >Liquidity analysis</Button>
        <Button $isHeader={isHeader} 
                $isActive={isActive('/financia-strength')}
                type='button' 
                onClick={handleNavigateFinancialStrength}
                >Financial strength</Button>
        <Button $isHeader={isHeader} 
                $isActive={isActive('/indicators-profitability')}
                type='button' 
                onClick={handleNavigateIndicators}
                >Indicators of profitability</Button>
        <Button $isHeader={isHeader} 
                $isActive={isActive('/asset-efficiency')}
                type='button' 
                onClick={handleNavigateAssetEfficiency}
                >Indicators asset efficiency</Button>
        <Button $isHeader={isHeader} 
                $isActive={isActive('/other-indicators')}
                type='button' 
                onClick={handleNavigateOtherIndicators}
                >Other indicators profitability</Button>
        <Button $isHeader={isHeader} 
                $isActive={isActive('/financial-analisis')}
                $isFinish={true}
                type='button' 
                onClick={handleFinancialAnalisis}
                >Financial analysis </Button>
    </Container>)
}