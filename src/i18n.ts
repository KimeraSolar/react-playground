import i18next from 'i18next';
import englishTranslation from './translations/en_US.json';
import portugueseTranslation from './translations/pt_BR.json';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: englishTranslation
    },
    pt: {
        translation: portugueseTranslation
    }
}

i18next.use(initReactI18next).init({resources, lng: 'pt'});

export default i18next;