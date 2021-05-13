import styled from 'styled-components';
import { Colors } from '../../utils/Colors';

export const FooterContainer = styled.footer`
    position: absolute;
    bottom: 16px;
    width: 100%;
    text-align: center;

    span{
        color: ${Colors.white};
        font-weight: 700;

        a{

            text-decoration: none;
            color: ${Colors.blue};
            font-weight: 700;
            
            margin-left: 5px;
        }
    }


` 