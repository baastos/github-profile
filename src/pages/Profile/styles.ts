import styled from 'styled-components'
import { Colors } from '../../utils/Colors';


export const ProfileContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: ${Colors.gray};
  
  display: flex;
  
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

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 60px 0px 0px 80px;
`;

export const ProfileTitle = styled.h2`
  color: ${Colors.white};
  font-weight: 700;
`

export const ProfileBox = styled.div`
  max-width: 772px;
  padding: 16px;
  background: ${Colors.grayDark};
  margin-top:22px;
  border-radius: 8px;

    header{
      display: flex;
      align-items: center;

      img{
        width:80px;
        height:80px;
        border-radius: 50%;
      }
      strong{
        margin-left: 20px;
        font-size:20px;
        color: ${Colors.white};

        span{
          color:${Colors.text};
          font-weight: 400;
          font-size:15px;
        }
      }
  
    }
`;

export const ProfileButton = styled.button`
        margin-left: auto;
        height:32px;
        border: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        padding:8px;

        font-weight:600;
        color: ${Colors.white};
        border-radius: 3px;

        background: ${Colors.blue};

        transition: filter 0.2s;

        &:hover{
          filter: brightness(0.9)
        }
`
export const ProfileData = styled.div`
  margin: 16px;
  padding:16px;
  background: ${Colors.gray};
  border-radius:8px;

`;

export const ProfileDataItem = styled.div`
  display: flex;
  align-items: center;
  
  h5{
    display:flex;
    flex-direction: column;
    color: ${Colors.title};
    font-weight: 600;
    text-transform: uppercase;


    span{
      color: ${Colors.white};
      text-transform: none
    }
  }


  & + &{
    margin-top:33px;
  }
`
