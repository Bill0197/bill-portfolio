import React from "react";
import { FooterStyle, WrapperIcon, Fb, Insta, Git, Tg } from "../Styles/Styles";

export default function Footer() {
    return (
        <FooterStyle>
            <h1>SOCIAL</h1>
            <WrapperIcon>
                <span>
                    <a href="https://www.facebook.com/Khabibullosaydullaev">
                        <Fb />
                    </a>
                </span>
                <span>
                    <a href="https://www.instagram.com/khabibullo_0197/">
                        <Insta />
                    </a>
                </span>
                <span>
                    <a href="https://github.com/Bill0197">
                        <Git />
                    </a>
                </span>
                <span>
                    <a href="https://t.me/khabibullosaydullaev">
                        <Tg />
                    </a>
                </span>
            </WrapperIcon>
        </FooterStyle>
    );
}
