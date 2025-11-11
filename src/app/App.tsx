import {AppRoutes} from './routes'; 
import {UsuarioLogadoProvider} from './shared/contexts/UsuarioLogado';

function App() {
    return (
        <UsuarioLogadoProvider>
            <AppRoutes />
        </UsuarioLogadoProvider>
    );
}
export default App;