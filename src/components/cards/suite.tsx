import styled from "@emotion/styled";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Text from "../text";

import Meter from "@/assets/icons/area.svg";
import Price from "@/assets/icons/dinheiro.svg";
import Persons from "@/assets/icons/pessoas.svg";
import plus from "@/assets/icons/+.svg";
import Button from "../button";

const CardContainer = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    border-radius: 26px;
    overflow: hidden;

    & > img {
        width: 100%;
        height: 560px;
        position: relative;
        z-index: -1;

        @media (max-width: 768px) {
            height: 460px;
        }
    }

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60%;
        background: linear-gradient(to top, rgba(12, 12, 12, 0.8), transparent);
    }
`

const Absolute = styled.div`
    position: absolute;
    left: 24px;
    bottom: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: center;    
    flex-direction: column;
    gap: 26px;

    & .suite_name {
        font-size: 28px;
        color: ${(props) => props.theme.colors.text.white};
        font-weight: ${(props) => props.theme.fonts.weights.medium};
        font-family: ${(props) => props.theme.fonts.titles};
        letter-spacing: -1px;
    }

    & .location {
        font-size: 16px;
        color: ${(props) => props.theme.colors.text.white};
        font-weight: ${(props) => props.theme.fonts.weights.light};
        margin-top: -24px;
        line-height: 1.2;
    }
`


interface SuiteCardProps {
    suite_img: StaticImageData | string;
    suite_name?: string;
}

export default function SuiteCard({
    suite_img,
    suite_name,
}: SuiteCardProps) {
    return <CardContainer>
        <Image src={suite_img} alt={suite_name || 'Imagem da suíte'} width={400} height={400} />
        <Absolute>
            <Text as="h2" className="suite_name">{suite_name}</Text>
            <Text as="p" className="location">Sitio Esperança | Miguel Pereira/RJ</Text>
            <Button
                bgColor="#fffce0"
                color="#053122"
            >
                Conhecer suíte
            </Button>
        </Absolute>
    </CardContainer>
}