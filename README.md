# POC React multilingual setup

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

The simple POC for the multi-language application (english and german languages in our project) using 'react-i18next'. 

## How To

1. Firstly we create a project: `npm create-react-app project`.
 
2. We need to add react-i18next and i18next to the project by using the below commands:
`npm install i18next`
`npm install react-i18next`.

3. Now, we make a folder with name "locales" in public folder. In which we create the separate folders for each language. In our example we have de and en folders. In each we create the file "translation.json" with specific translations for given language.

4. Add "i18n.js" file with specifing tranlastions.
```
import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
    // load translation using http -> see /public/locales
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;
```

5. In "index.json" we add 'import \'./i18n/i18n\';'.

6. For using translation we add 'const { t } = useTranslation();' to our solution. See the example of use below.
```
import { useTranslation } from 'react-i18next';
...
const { t } = useTranslation();
...
<b>{t("good_morning")}</b>
```

7. For switching between languages, we create the "LangSelector" component.
```
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
```