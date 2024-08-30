import logo from './logo.svg';
import './App.css';
import BioPage from './bio_page/BioPage';
import PortfolioTabs from './portfolio_page/PortfolioTabs';

function App() {
  return (
    <div className="App">
      <BioPage />
      <PortfolioTabs id="portfolio_tabs" />
    </div>
  );
}

export default App;
