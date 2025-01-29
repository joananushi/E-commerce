import { Dropdown } from 'react-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: "en", name: "English", abbreviation: "ENG" },
    { code: "it", name: "Italian", abbreviation: "ITA" },
  ];

  const currentLanguage = i18n.language;

  return (
    <div className="language-switcher">
      <NavDropdown title={languages.find((lang) => lang.code === currentLanguage)?.abbreviation || "ENG"} id="language-dropdown" align="end">
        {languages.map((lang) => (
          <NavDropdown.Item key={lang.code} onClick={() => changeLanguage(lang.code)}>
            {lang.name}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </div>
  );
};

export default LanguageSwitcher;
