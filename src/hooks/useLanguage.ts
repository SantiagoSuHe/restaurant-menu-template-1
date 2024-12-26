import { useParams } from 'react-router-dom';
import { translations } from '../i18n/translations';

export function useLanguage() {
  const { lang = 'en' } = useParams();
  const t = translations[lang as keyof typeof translations];

  return {
    lang,
    t,
  };
}