import styled from "@emotion/styled";
import Image from "next/image";
import Text from "../text";
import Button from "../button";

import Logo from "@/assets/logotipo/logo.svg";

import Instagram from "@/assets/icons/instagram.svg";
import Facebook from "@/assets/icons/facebook.svg";
import WhatsApp from "@/assets/icons/whatsapp.svg";

const FooterContainer = styled.footer`
    width: calc(100% - 24px);
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.primary.dark};
    border-radius: 32px;
    position: relative;
    margin: 24px auto;
    flex-direction: column;
    gap: 48px;

    @media (max-width: 768px) {
        padding: 24px 5%;
    }

    & > hr {
        width: 100%;
        border: none;
        border-top: 1px solid ${({ theme }) => theme.colors.neutral.gray[700]};
    }

    & .columns {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 24px;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 48px;
        }

        & .list-item {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 16px;
            flex: 1;

            @media (max-width: 768px) {
                gap: 12px;
            }

            & > img {
                width: 120px;
                height: auto;

                @media (max-width: 768px) {
                    width: 100px;
                    margin-bottom: 12px;
                }
            }

            & .slogan {
                font-size: 18px;
                line-height: 1.2;
                color: ${({ theme }) => theme.colors.text.white};

                @media (max-width: 768px) {
                    margin-bottom: 12px;
                }
            }

            & > h4 {
                font-size: 18px;
                font-weight: 500;
                font-family: ${({ theme }) => theme.fonts.titles};
                color: ${({ theme }) => theme.colors.neutral.white.base};
            }

            & .options {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;

                & > li {

                    & > a {
                        line-height: 1.2;
                        font-size: 16px;
                        color: ${({ theme }) => theme.colors.text.white};
                        text-decoration: none;
                    }
                }
            }

            & .options--icons {
                flex-direction: row;
                gap: 12px;

                & > li {
                    padding: 4px;
                    border-radius: 999px;
                    background: ${({ theme }) => theme.colors.text.white};

                    & > a > img {
                        width: 24px;
                        height: 24px;
                    }
                }

            }
        }
    }

    & .credits {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
        margin-top: -24px;

        & > p {
            font-size: 14px;
            color: ${({ theme }) => theme.colors.text.white};
        }

        & .dev-badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 4px 10px 4px 4px;
            border-radius: 8px;
            background-color: rgb(0, 0, 0);
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            font-size: 16px;
            line-height: 1;

            & img {
                width: 22px;
                height: 22px;
                object-fit: contain;
            }
        }
    }
`

export default function Footer() {
    return <FooterContainer>
        <ol className="columns">
            <li className="list-item">
                <Image src={Logo} alt="Logo" />
                <Text as="p" className="slogan">Um lugar para viver o extraordinário</Text>
                <Button
                    bgColor="#fff"
                    color="#052d22"
                >
                    Reservar agora
                </Button>
            </li>
            <li className="list-item">
                <Text as="h4">Mapa do site</Text>
                <ul className="options">
                    <li><a href="#home">Início</a></li>
                    <li><a href="#qualidades">Atrações</a></li>
                    <li><a href="#o-que-fazer">O que fazer</a></li>
                    <li><a href="#qualidades">Suites</a></li>
                    <li><a href="#qualidades">Minha hospedagem</a></li>
                    <li><a href="#qualidades">Fazer um evento</a></li>
                </ul>
            </li>
            <li className="list-item">
                <Text as="h4">Contato</Text>
                <ul className="options">
                    <li><a href="#">+55 (32) 99918-9934</a></li>
                    <li><a href="#">suiteesperanca@gmail.com</a></li>
                </ul>
            </li>
            <li className="list-item">
                <Text as="h4">Localização</Text>
                <ul className="options">
                    <li><a href="#">Av. das Acácias, 273, Miguel Pereira 26900-000</a></li>
                </ul>
            </li>
            <li className="list-item">
                <Text as="h4">Redes sociais</Text>
                <ul className="options options--icons">
                    <li><a href="#"><Image src={Instagram} alt="Instagram" /></a></li>
                    <li><a href="#"><Image src={Facebook} alt="Facebook" /></a></li>
                    <li><a href="#"><Image src={WhatsApp} alt="WhatsApp" /></a></li>
                </ul>
            </li>
        </ol>
        <hr />
        <aside className="credits">
            <Text as="p">&copy; 2024 Sítio Esperança. Todos os direitos reservados.</Text>
            <a
                className="dev-badge"
                href="https://www.alephsramosdev.com.br?utm_source=fast-homes&utm_medium=footer&utm_campaign=unitycompany"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="https://www.alephsramosdev.com.br/alephsramosdev-icon.png"
                    alt="project-by-alephsramosdev"
                    loading="eager"
                />
                <span>@alephsramosdev</span>
            </a>
        </aside>
    </FooterContainer>
}