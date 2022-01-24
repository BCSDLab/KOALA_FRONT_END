import styled from "styled-components";

export const Menu = styled.nav`
    min-width:1323px;
    height:24px;
    padding-bottom:15.3px;
    justify-content:space-between;
    position:absolute;
    border-bottom:1.5px solid #eeeeee;
    top:180px;
    left:${props=>props.toggle?'488px':'353px'};
`; 

export const Item = styled.span`
    font-size:16px;
    margin-right:40px;
    cursor:pointer;
`;

export const ItemUnderBar = styled.div`
    width:32px;
    height:8px;
    background-color:#222222;
    position:absolute;
    top:216px;
    left:${props => {
            if(props.toggle){
                if(props.menu === '전체'){
                    return '488px';
                }else if(props.menu === '아우누리'){
                    return '568px';
                }else if(props.menu === '아우미르'){
                    return '670px';
                }else{
                    return '830px';
                }
                
            }else{
                if(props.menu === '전체'){
                    return '353px';
                }else if(props.menu === '아우누리'){
                    return '435px';
                }else if(props.menu === '아우미르'){
                    return '533px';
                }else{
                    return '695px';
            }
        }
    }}
`;