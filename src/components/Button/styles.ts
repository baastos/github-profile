import styled from 'styled-components';
import { Colors } from '../../utils/Colors';


export const ButtonContainer = styled.button`
    background: ${Colors.grayLight};
    border: 0;
    height: 38px;
    padding: 0px 52px;
    font-weight: 700;
    width: 160px;
    

    display: flex;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
    color: ${Colors.white};

    border-radius:3px;

    margin-top:20px;

    transition: filter 0.2s ease;

    &:hover{
        filter: brightness(0.9)
    }
`