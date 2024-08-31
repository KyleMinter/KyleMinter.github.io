import './App.css'
import BioPage from './bio_page/BioPage';
import PortfolioTabs from './portfolio_page/PortfolioTabs';

function App() {
  return (
    <div className="App bg-primary">
      <BioPage/>
      <div id="portfolio_tabs" className="p-5">
        <PortfolioTabs/>
      </div>
    </div>
  );
}

export default App;
