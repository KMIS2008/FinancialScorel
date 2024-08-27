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

    return(<Container>
        <Button type='button' onClick={handleNavigateHome}>Home</Button>
        <Button type='button' onClick={handleNavigateLiguidityAnalysis}>Liquidity analysis</Button>

    </Container>)
}