import { Container } from './styles';
import GlobalStyles from '../../GlobalStyles';
import igniteLogo from '../../assets/ignite-logo.svg'
export function Header( ) {
return (
    <Container>
        <GlobalStyles/>
        <img src={igniteLogo} alt="" />
        <strong>Ignite Feed </strong>
   </Container>
)

}