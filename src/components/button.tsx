import styled from "@emotion/styled";
import React from "react";
import Text from "./text";

type ButtonStyleProps = {
    color?: string;
    bgColor?: string;
};

const ButtonStyle = styled.button<ButtonStyleProps>`
    border: none;
    font-size: 18px;
    width: 162px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    font-family: ${(props) => props.theme.fonts.primary};
    letter-spacing: -1px;
    font-weight: ${(props) => props.theme.fonts.weights.medium}; 
    background: ${({ bgColor }) => bgColor || '#000'};
    color: ${({ color }) => color || '#fff'};
    position: relative;
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        scale: 1.02;

        & .text_static {
            top: 200%;
        }

        & .text_hover {
            top: 50%;
        }
    }

    &:active {
        scale: 1;
    }

    & .text_static {
        position: absolute;
        z-index: 2;
        transition: all 0.2s ease-in-out;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
    }

    & .text_hover {
        position: absolute;
        left: 50%;
        top: -50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
        transition: all 0.2s ease-in-out;
    }
`

interface ButtonProps
    extends ButtonStyleProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function Button({
    children,
    color,
    bgColor,
    onClick = () => { alert("Button clicked!") },
    className,
    ...props
}: ButtonProps) {
    return (
        <ButtonStyle bgColor={bgColor} color={color} className={className} {...props} onClick={onClick}>
            <Text as="span" className="text_static">
                {children}
            </Text>
            <Text as="span" className="text_hover">
                {children}
            </Text>
        </ButtonStyle>
    );
}