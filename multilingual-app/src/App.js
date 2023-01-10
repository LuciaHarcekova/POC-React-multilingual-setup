import { useTranslation } from 'react-i18next';
import LangSelector from './components/langSelector'

function App() {

  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <div>{<LangSelector />}</div>
        <p>
          <b>{t("good_morning")}</b>
          <br />
          <b>{t('user.age')}</b>
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
