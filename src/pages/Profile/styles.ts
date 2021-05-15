import styled from 'styled-components'
import { Colors } from '../../utils/Colors';


export const ProfileContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: ${Colors.gray};
`;
export const AsideContainer = styled.aside`
  max-width: 312px;
  height: 100vh;
  background: ${Colors.grayDark};

  display: flex;
  flex-direction: column;

`
export const InputSearch = styled.input`
  margin: 11px;
  padding: 6px;
  border: 2px solid ${Colors.gray};
  outline: none;
  background: ${Colors.gray};
  color: ${Colors.text};
  border-radius: 3px;

  &::placeholder{
    color: ${Colors.text};
    font-weight:600
  }
  &:focus{
  border: 2px solid ${Colors.blue};

  }


`
export const FriendListContainer = styled.div`
  padding: 18px 0px;
  border-top: 2px solid ${Colors.gray};

  strong{
    
    margin-left: 16px;
    color: ${Colors.text};
  }

  ul{

    padding: 16px 22px;
    list-style: none;

    li{

      div{
        display:flex;
        align-items: center;
        
          img{
            width:32px;
            height:32px;
            border-radius:50%;

          }
          div{
            display: flex;
            flex-direction:column;
            margin-left:12px;

            strong{
              display: flex;
              flex-direction: column;
              font-size: 14px;
              margin-left: 0;
              color: ${Colors.text};
            }
            span{
              font-size:12px;
              color: ${Colors.text};
            }
          }
      }
      & + li{
        margin-top: 12px;
      }
    }
  }
`

