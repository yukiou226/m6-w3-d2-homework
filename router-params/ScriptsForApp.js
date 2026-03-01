import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';

// URLs from medialist.txt for app icons
const mediaUrls = [
  'https://upload.wikimedia.org/wikipedia/commons/f/f9/Hulu_logo_%282018%29.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2a/HBO-Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/90/Prime_Video_logo_%282024%29.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
];

const appNames = ['Hulu', 'HBO', 'Prime Video', 'Netflix'];

function AppDisplay() {
  const { appName } = useParams();
  return (
    <div className="app-display">
      <p>{appName}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div className="app-icons">
            {appNames.map((name, index) => (
              <Link
                key={name}
                to={`/app/${name}`}
                className="app-icon-link"
              >
                <img
                  src={mediaUrls[index]}
                  alt={name}
                  className="app-icon"
                />
              </Link>
            ))}
          </div>
          <Routes>
            <Route path="/" element={<div className="app-display"><p>Click an app icon above</p></div>} />
            <Route path="/app/:appName" element={<AppDisplay />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
