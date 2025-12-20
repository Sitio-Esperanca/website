import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect, useState } from "react";
import LogoImage from "@/assets/logotipo/logo.svg";
import Text from "../text";
import Button from "../button";
import Sidebar from "./sidebar";

const HeaderBase = styled.header`
    width: 100%;
    padding: 42px 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 auto;
    z-index: 1000;

    & .logotipo {
        width: 120px;
        height: auto;
    }

    & .navbar {
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;

        & .lista {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;

            & .option {
                padding: 12px 16px;
                cursor: pointer;
                font-size: 16px;
                font-family: ${(props) => props.theme.fonts.primary};
                font-weight: ${(props) => props.theme.fonts.weights.medium};
                color: ${(props) => props.theme.colors.text.white};
            }
        }
    }
`;

const HeaderDesktop = styled(HeaderBase)`
    @media (max-width: 768px) {
        display: none;
    }
`;

const HeaderMobile = styled(HeaderBase)`
    @media (min-width: 769px) {
        display: none;
    }
    padding: 24px 5%;

    & .logotipo {
        width: 80px;
    }

    & .btn_open_menu {
        border: 1px solid ${(props) => props.theme.colors.neutral.white.primary};
        border-radius: 999px;
        width: 46px;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;
        transition: border-color 200ms ease;

        & .line {
            position: absolute;
            display: block;
            width: 18px;
            height: 2px;
            background: #ffffffd0;
            transition: transform 200ms ease, opacity 200ms ease;
        }

        & .line:nth-of-type(1) { transform: translateY(-5px); }
        & .line:nth-of-type(2) { transform: translateY(0); }
        & .line:nth-of-type(3) { transform: translateY(5px); }

        &.open .line:nth-of-type(1) { transform: translateY(0) rotate(45deg); }
        &.open .line:nth-of-type(2) { opacity: 0; }
        &.open .line:nth-of-type(3) { transform: translateY(0) rotate(-45deg); }
    }
`;

function DesktopHeaderContent() {
    return (
        <>
            <Image className="logotipo" src={LogoImage} alt="logo-do-sitio-esperanca" />
            <nav className="navbar">
                <ul className="lista">
                    <li className="option">
                        <Text as="span">Ínicio</Text>
                    </li>
                    <li className="option">
                        <Text as="span">Sobre nós</Text>
                    </li>
                    <li className="option">
                        <Text as="span">Acomodações</Text>
                    </li>
                    <li className="option">
                        <Text as="span">Eventos</Text>
                    </li>
                </ul>
                <Button bgColor="rgb(255, 252, 224)" color="rgb(8, 71, 52)">
                    Reservar agora
                </Button>
            </nav>
        </>
    );
}

function MobileHeaderContent() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen((prev) => !prev);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (typeof document === "undefined") return;
        const body = document.body;
        if (open) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "";
        }
        return () => {
            body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <Image className="logotipo" src={LogoImage} alt="logo-do-sitio-esperanca" />
            <button
                className={`btn_open_menu ${open ? "open" : ""}`}
                onClick={handleToggle}
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
            >
                <span className="line" />
                <span className="line" />
                <span className="line" />
            </button>
            <Sidebar open={open} onClose={handleClose}>
                <div className="div1">
                    <Text as="span">Ínicio</Text>
                    <Text as="p">Explore a home</Text>
                </div>
                <div className="div2">
                    <Text as="span">Sobre nós</Text>
                    <Text as="p">Conheça nossa história</Text>
                </div>
                <div className="div3">
                    <Text as="span">Acomodações</Text>
                    <Text as="p">Veja nossos quartos</Text>
                </div>
                <div className="div4">
                    <Text as="span">Eventos</Text>
                    <Text as="p">Faça seu evento</Text>
                </div>
                <div className="div5">
                    <Text as="span">Local</Text>
                    <Text as="p">Encontre-nos aqui</Text>
                </div>
                <div className="div6">
                    <Text as="span">Avaliação</Text>
                    <Text as="p">Veja o que falam</Text>
                </div>
                <div className="div7">
                    <button>
                        Reservar agora
                    </button>
                </div>
            </Sidebar>
        </>
    );
}

export default function Header() {
    return (
        <>
            <HeaderDesktop>
                <DesktopHeaderContent />
            </HeaderDesktop>
            <HeaderMobile>
                <MobileHeaderContent />
            </HeaderMobile>
        </>
    );
}