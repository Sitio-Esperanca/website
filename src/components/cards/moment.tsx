import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";
import Text from "../text";
import setaParaBaixo from "@/assets/icons/seta-para-baixo.svg";

const Card = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    cursor: pointer;

    & .image {
        width: 100%;
        height: 500px;
        border-radius: 16px;
        object-fit: cover;
        object-position: center;

        @media (max-width: 768px) {
            height: 460px;
            border-radius: 16px;
        }
    }

    & .container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 8px;

        & .card_title {
            font-size: 22px;
            color: ${(props) => props.theme.colors.neutral.black.primary};
            font-weight: ${(props) => props.theme.fonts.weights.medium};
            font-family: ${(props) => props.theme.fonts.titles};
            letter-spacing: -1px;
        }

        & > button {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${(props) => props.theme.colors.primary.dark};
            border-radius: 999px;

            @media (max-width: 768px) {
                width: 42px;
                height: 42px;
            }

            & img {
                width: 28px;
                height: 28px;

                @media (max-width: 768px) {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
`

interface MomentCardProps {
    image: StaticImageData | string;
    alt_image: string;
    onClick?: () => void;
    children: React.ReactNode;
}

export default function MomentCard({
    image,
    alt_image,
    onClick,
    children
}: MomentCardProps) {
    return (
        <Card>
            <Image src={image} alt={alt_image} loading="lazy" className="image" />
            <div className="container">
                <Text as="h6" className="card_title">{children}</Text>
                <button type="button" onClick={onClick}>
                    <Image src={setaParaBaixo} alt="seta-para-baixo" />
                </button>
            </div>
        </Card>
    )
}