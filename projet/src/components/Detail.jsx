import React from "react";
import i18n from "../i18n";
import HeaderTwo from "./HeaderTwo";
import { useTranslation } from "react-i18next";


const Detail = () => {
    const { t } = useTranslation();
    return (
        <div className="details" id="details">
            <HeaderTwo />
            <div className="max-w-7xl pt-10 mx-auto text-left">
                <h1 className="text-center text-3xl font-semibold mb-3">Présentation</h1>

                <p >{t('detail.p1')}</p>
                <br />
                <p>{t('detail.p2')}</p>
                <br />
                <p>{t('detail.p3')}</p>
                <ul>
                    <li> - {t('detail.li1')}</li>
                    <li> - {t('detail.li2')}</li>
                    <li> - {t('detail.li3')}</li>
                </ul>
                <br />
                <p>{t('detail.p4')}</p>
                <br />
                <p>{t('detail.p5')}</p>
            </div>
            <div className="container mx-auto">
                <img src="./images/Organigramme.png" alt="Organigramme" className="mx-auto " />
            </div>
        </div>
    );
};
export default Detail;