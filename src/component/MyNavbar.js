import { Link, Button} from "react-router-dom";
import './MyNavbar.css';
import { useTranslation, Trans } from "react-i18next";


export const MyNavbar = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/"><a className="brand">鸿宾楼</a></Link>

                <Link to="/Menu" >
                    <Trans>
                        <a className="item" style={{left:"10%"}}>
                            {t("Menu")}
                        </a>
                    </Trans>
                    </Link>

                <Link to="/About"><a className="item" style={{left:"15%"}}>About</a></Link>

                <Link to="/Reservation"><a className="item" style={{left:"20%"}}>Reservation</a></Link>

                <Link to="/Help"><a className="item" style={{left:"26.5%"}}>Help</a></Link>

                <button onClick={() => changeLanguage("de")}>de</button>
                <button onClick={() => changeLanguage("en")}>en</button>
            </div>
        </nav>
    );
}
