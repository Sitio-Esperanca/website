import React, { JSX } from "react";

type TextProps = {
    as?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
};

export default function Text({
    as = "span",
    children,
    className,
    ...props
}: TextProps) {
    return React.createElement(as, { className, ...props }, children
    );
}