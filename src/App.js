import './App.css'
import BioPage from './bio_page/BioPage';
import PortfolioTabs from './portfolio_page/PortfolioTabs';
import PageFooter from './footers/PageFooter';

function App() {
  return (
    <div className="App bg-primary">
      <div id="bio_page">
        <BioPage/>
      </div>
      <div id="portfolio_tabs" className="p-5">
        <PortfolioTabs/>
      </div>
      <PageFooter icon={"bi bi-chevron-bar-up"} text={"Back the top"} link={"#bio_page"} />
    </div>
  );
}

export default App;
