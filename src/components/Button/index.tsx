import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function Button({ title, children, ...rest }: ButtonProps): JSX.Element {
    return (
        <ButtonContainer  {...rest}>
            {children}
        </ButtonContainer>
    )
}