import { FormattedMessage } from "react-intl";
import "./Footer.scss";

const Footer = ({ smaller }) => {
  return (
    <footer className={`footer ${smaller ? "footer--smaller" : ""} `}>
      <p className="footer__text">
        <FormattedMessage id="footer:text" />
      </p>
    </footer>
  );
};

export default Footer;
