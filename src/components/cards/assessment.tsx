import styled from "@emotion/styled"
import Text from "../text"
import Image, { StaticImageData } from "next/image";
import GoogleIcon from "@/assets/icons/google.svg";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 24px;
    width: 100%;
    padding: 24px;
    background-color: #E9F7F2;
    border-radius: 32px;

    & .quote {
        font-size: 28px;
        color: ${(props) => props.theme.colors.neutral.black.primary};
        font-family: ${(props) => props.theme.fonts.primary};
        line-height: 1.2;
        font-weight: 300;

        @media (max-width: 768px) {
            font-size: 20px;
        }
    }

    & .profile {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;

        & .photo {
            width: 48px;
            height: 48px;
            border-radius: 999px;
            background-color: ${(props) => props.theme.colors.primary.dark};
            display: flex;
            align-items: center;
            justify-content: center;

            & > span {
                font-family: ${(props) => props.theme.fonts.primary};
                font-size: 18px;
                color: ${(props) => props.theme.colors.text.white};
                font-weight: 600;

                @media (max-width: 768px) {
                    font-size: 16px;
                }
            }
        }

        & .infos {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            & .name {
                font-family: ${(props) => props.theme.fonts.titles};
                font-size: 20px;
                color: ${(props) => props.theme.colors.neutral.black.primary};
                font-weight: 500;

                @media (max-width: 768px) {
                    font-size: 18px;
                }
            }

            & .time {
                font-size: 14px;
                color: ${(props) => props.theme.colors.text.secondary};
                display: inline-flex;
                align-items: center;
                gap: 4px;

                & > div {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                }
            }
        }
    }
`

interface AssessmentCardProps {
    assessment: string;
    name: string;
    time: number;
    image?: StaticImageData | string;
}

export default function AssessmentCard({
    assessment,
    name,
    time,
    image
}: AssessmentCardProps) {
    return <Card>
        <Text as="p" className="quote">
            "{assessment}"
        </Text>
        <aside className="profile">
            <div className="photo">
                {image ? (
                    <Image src={image} alt={name} width={48} height={48} />
                ) : (
                    <Text as="span">{name.slice(0, 2).toUpperCase()}</Text>
                )}
            </div>
            <main className="infos">
                <Text as="h6" className="name">
                    {name}
                </Text>
                <Text as="span" className="time">
                    {time} meses atrás no
                    <div>
                        <Image src={GoogleIcon} alt="Google" width={16} height={16} />
                        <Text as="span" className="google">Google</Text>
                    </div>
                </Text>
            </main>
        </aside>
    </Card>
}