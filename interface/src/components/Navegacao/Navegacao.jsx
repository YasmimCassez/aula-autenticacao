import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react'; // Adicionando useEffect
import NavDropdown from 'react-bootstrap/NavDropdown'; // Import do NavDropdown
import Button from 'react-bootstrap/Button'; // Caminho corrigido
import { MdLogout } from 'react-icons/md'; // Ícone de logout
import style from './Navegacao.module.css'; // Importação do arquivo CSS do módulo
import AuthRequests from '../../fetch/AuthRequests'; // Certifique-se de que AuthRequests está importado corretamente

function Navegacao() {

    const estiloNavbar = {
        backgroundColor: 'var(--primaryColor)',
    }

    const [vizualizacaoLogin, setVizualizacaoLogin] = useState(false); // Definindo o estado
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Removida a prop
    const [username, setUsername] = useState(''); // Removida a prop
    // Checa o token ao carregar o componente
    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUsername = localStorage.getItem('username');
        const storedidUsuario = localStorage.getItem('idPessoa');
        if (token && AuthRequests.checkTokenExpiry()) {
            setIsAuthenticated(true);
            setUsername(storedUsername || ''); // Checa se o username existe
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    const handleLogin = () => {    
        window.location.href = '/login'; // Redireciona para a página de login
    };

    const handleLogout = () => {
        AuthRequests.removeToken(); // Remove o token de autenticação
        localStorage.clear();
        setIsAuthenticated(false); // Atualiza o estado
        window.location.href = '/'; // Redireciona para a home
    };


    return (
        <>
            <Navbar style={estiloNavbar}>
                <Container>
                    <Nav>
                        <Nav.Link href="/" className={style.navLink}>Home</Nav.Link>
                        {isAuthenticated ? (
                            <>
                                <Nav.Link href="/pessoas" className={style.navLink}>Pessoas</Nav.Link>

                                <NavDropdown
                                    title={`Olá ${username.split(' ')[0]}`} // Exibe o primeiro nome do usuário
                                    id={style.collapsibleNavDropdown}
                                    show={vizualizacaoLogin}
                                    onMouseEnter={() => setVizualizacaoLogin(true)}
                                    onMouseLeave={() => setVizualizacaoLogin(false)}
                                >
                                    <NavDropdown.Item onClick={handleLogout} className={style.navDropdown}>
                                        <MdLogout /> Sair
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <Button onClick={handleLogin} variant='light'>Login</Button> // Corrigido o botão de login
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default Navegacao;