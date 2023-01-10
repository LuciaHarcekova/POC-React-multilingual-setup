import { useTranslation } from 'react-i18next';

const LangSelector = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="App-header">
            <h2>{t("localization_testing")}</h2>
            <button onClick={() => changeLanguage("de")}>de</button>
            <button onClick={() => changeLanguage("en")}>en</button>
        </div>
    );
};

export default LangSelector;
