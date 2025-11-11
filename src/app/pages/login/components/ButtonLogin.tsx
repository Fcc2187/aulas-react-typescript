import React from "react";

interface ButtonLoginProps {
    type?: "button" | "submit" | "reset";
    onClick?: () => void; 
    children?: React.ReactNode;
}

export const ButtonLogin: React.FC<ButtonLoginProps> = ({ type, onClick, children  }) => {
    return (
        <button type={type} onClick={onClick}>{children}</button>
    );
}
