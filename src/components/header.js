import React, { useState } from "react";
import AlocadosLogo from "../assets/alocados.svg";
import {
    ChangeMoneyBox,
    HeaderBox,
    HeaderRouterBox,
    HeaderRouterText,
    Logoimg,
} from "../styles/header.style";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderRouterBtn } from "../recoil/recoils";
import { useRecoilState } from "recoil";

export default function Header() {
    const movePage = useNavigate();
    const Location = useLocation();

    const goListPage = () => {
        movePage("/ChangeList");
    };
    const goChangeTokenPage = () => {
        movePage("/");
    };
    return (
        <HeaderBox>
            <Logoimg src={AlocadosLogo} alt="Alocados logo" />
            <HeaderRouterBox>
                <HeaderRouterText
                    className={Location.pathname === "/" ? "active" : ""}
                    onClick={goChangeTokenPage}
                    Location={Location.pathname}
                >
                    환전하기
                </HeaderRouterText>
                <HeaderRouterText
                    className={
                        Location.pathname === "/ChangeList" ? "active" : ""
                    }
                    onClick={goListPage}
                    Location={Location.pathname}
                >
                    거래내역
                </HeaderRouterText>
            </HeaderRouterBox>
        </HeaderBox>
    );
}
