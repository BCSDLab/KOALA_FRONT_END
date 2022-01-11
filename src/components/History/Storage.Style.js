import styled from "styled-components"

export const MemoBlock = styled.textarea`
width: 1077px;
height: 100px;
border: none;
resize: none;
font-family: 'NotoSansCJKKR';
font-size: 12px;
&:focus{
    background: #eeeeee;
    outline: none;
}
cursor: pointer;
`
export const CheckBox = styled.div`
display: flex;
align-items: center;
`
export const MenuList = styled.div`
display: flex;
margin-bottom: 32px;
`
export const Menu = styled.div`
display: flex;
align-items: center;
margin-left: 1137px;
padding: 8px;
border: solid 1px #eeeeee;
color: #999999;
cursor: pointer;
`
export const MenuLogo = styled.img`
width: 16px;
height: 16px;
margin-right: 8px;
`
export const MenuName = styled.div`
display: flex;
text-align: center;
align-items: center;
`
export const Wrapper = styled.div`
display: block;
`
export const MemoOption = styled.div`
font-size: 12px;
color: #999999;
cursor: pointer;
`
export const ReceiveDate = styled.div`
font-size: 12px;
color: #999999;
`
export const DivideLine = styled.img`
width: 16px;
height: 16px;
`
export const AlertProp = styled.div`
display: flex;
margin-left: 43px;
`
export const StorageAlert = styled.li`
display: flex;
justify-content: space-between;
color: #222222;
padding: 15px 0 15px 0;
border-bottom: 1px solid #eeeeee;
`
export const MemoAlertWrapper = styled.div`
display: block;
`
export const AlertContent = styled.div`
display: flex;
`