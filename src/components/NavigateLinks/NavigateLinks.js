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

    return(<Container>
        <Button type='button' onClick={handleNavigateHome}>Home</Button>
        <Button type='button' onClick={handleNavigateLiguidityAnalysis}>Liquidity analysis</Button>
        <Button type='button' onClick={handleNavigateFinancialStrength}>Financial strength</Button>
        <Button type='button' onClick={handleNavigateIndicators}>Indicators of profitability</Button>
 
    </Container>)
}