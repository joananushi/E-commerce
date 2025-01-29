
import { useTranslation } from "react-i18next";




const Home = () => {

    const { t } = useTranslation();
  

  return (
    <div>

      <h2>Test Page</h2>
      <h1 className=".text-success">{t("welcome_message")}</h1>

      <p className="example">Welcome to your page!</p>
    </div>
  );
};

export default Home;
