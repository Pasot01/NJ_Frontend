import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// pages & components
import Home from './pages/Home';
import Login from './pages/Login';
// import Signup from './pages/Signup';
import Accueil from './pages/Accueil';
import Navbar from './components/Navbar';

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        {user && (
          <div>
            <Navbar />
            <Routes>

              <Route
                path="/"
                element={!user ? <Accueil /> : <Navigate to="/home" />}
              />
              <Route
                path="/home"
                element={user ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={!user ? <Accueil /> : <Navigate to="/" />}
              />
              {/* <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              /> */}
            </Routes>
          </div>
        )}
        {!user && (
          <div className="pages">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/home"
                element={!user ? <Accueil /> : <Navigate to="/login" />}
              />
              {/* <Route
                path="/"
                element={!user ? <Accueil /> : <Navigate to="/home" />}
              />
              <Route
                path="/home"
                element={user ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              /> */}
            </Routes>
          </div>
        )}

      </BrowserRouter>
    </div>
  );
}

export default App;