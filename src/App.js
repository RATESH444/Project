import logo from './logo.svg';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [hasAccount, setHasAccount] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
    setHasAccount(!!localStorage.getItem('registeredUser'));
  }, []);

  const handleRegister = (username, password) => {
    localStorage.setItem('registeredUser', JSON.stringify({ username, password }));
    setHasAccount(true);
  };

  const handleLogin = (username, password) => {
    const registered = JSON.parse(localStorage.getItem('registeredUser'));
    if (registered && registered.username === username && registered.password === password) {
      setUser({ username });
      localStorage.setItem('user', JSON.stringify({ username }));
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
