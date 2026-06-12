import en from '../locales/en/common.json' with { type: 'json' };
import fr from '../locales/fr/common.json' with { type: 'json' };
import ar from '../locales/ar/common.json' with { type: 'json' };

const rtlLanguages = ["ar", "he", "fa", "ur"];

const langs = ['en', 'ar', 'fr'];

export const locales = {
    default: 'en',
    langs,
    en: en,
    fr: fr,
    ar: ar,
    name: {
        'ar': 'العربية',
        'fr': 'Français',
        'en': 'English',
    },
    isRTL: (lang: Language):boolean => {
        return rtlLanguages.includes(lang)
    }
}