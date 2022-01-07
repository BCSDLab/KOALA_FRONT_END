import styled from "styled-components";

export const Menu = styled.nav`
    min-width:1323px;
    height:24px;
    padding-bottom:15.3px;
    justify-content:space-between;
    position:absolute;
    border-bottom:1.5px solid #eeeeee;
    left:488px;
    top:180px;
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
        if(props.menu === '전체'){
            return '488px';
        }else if(props.menu === '아우누리'){
            return '568px';
        }else if(props.menu === '아우미르'){
            return '670px';
        }else{
            return '830px';
        }
    }}
`;

export const FilterList = styled.nav`
    min-width:1310px;
    height:36px;
    display:flex;
    align-items:center;
    font-size:12px;
    position:absolute;
    left:501px;
    top:263px;

    .read,
    .notread {
        margin-right:15px;
    }

    .goStore {
        margin-right:10px;
        display:flex;
        align-items:center;
    }

    .delete {
        margin-right:24px;
        display:flex;
        align-items:center;
    }
`;

export const CheckBox = styled.div`
    width:16px;
    height:16px;
    margin-right:24px;
    border-radius:3px;
    border:1px solid #c4c4c4;
    cursor:pointer;

    ${props => {
        if(props.checkAll){
            return `
            background-image:url('/asset/check.svg');
            background-position:center;
            `
        }
     }}
`;

export const CheckBoxTitle = styled.span`
    font-size:12px;
    margin-right:40px;
    cursor:pointer;
`;

export const FilterItem = styled.span`
    padding:8px;
    cursor:pointer;

    ${props => {
        if(props.readNotification || props.notReadNotification){
            return `
                border:1px solid #222222;
                color:#222222;
            `;
        }else{
            return `
                border:1px solid #eee;
                color:#999999;
            `;
        }
    }}
`;

export const FilterItemImage = styled.img`
    margin-right:5px;
`;

export const SearchInput = styled.input`
    width:665px;
    padding:8px;
    border:none;
    background-color:#eeeeee;
`;

export const SearchButton = styled.button`
    width:101px;
    height:34px;
    padding:8px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:12px;
    background-color:#222222;
    color:#ffffff;
`;

export const SearchImage = styled.img`
    margin-left:8px;
`;

export const MainList = styled.div`
    position:absolute;
    left:501px;
    top:320px;
`;

export const MainItem = styled.div`
    min-width:1310px;
    display:flex;
    padding-bottom:15px;
    margin-bottom:15px;
    border-bottom:1.5px solid #eeeeee;
`;

export const MainCheckBox = styled(CheckBox)`
    ${props => {
       if(props.checkAll || props.checkSome){
           return `
           background-image:url('/asset/check.svg');
           background-position:center;
           `
       }
    }}
`;
export const MainCheckBoxTitle = styled(CheckBoxTitle)`
    min-width:45px;
    margin-right:125px;
    color:${props => props.readState==='읽음'?'#999999':'#222222'};
`;
export const MainContent = styled.div`
    min-width:899px;
    font-size:12px;
    margin-right:65px;
    color:${props => props.readState==='읽음'?'#999999':'#222222'};
`;

export const MainReadState = styled(MainContent)`
    min-width:47px;
    text-align:center;
    color:#999999;
    margin-right:24px;
`;

export const MainPeriod = styled(MainContent)`
    min-width:62px;
    margin-right:0px;
    color:${props => props.readState==='읽음'?'#999999':'#222222'};
`;