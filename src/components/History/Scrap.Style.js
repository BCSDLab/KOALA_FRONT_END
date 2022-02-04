import styled from "styled-components"

export const MemoBlock = styled.div`
width: 1053px;
border: none;
resize: none;
font-family: 'NotoSansCJKKR';
font-size: 12px;
`
export const WriteBlock = styled.textarea`
width: 1037px;
height: 70px;
border: none;
resize: none;
outline: none;
background-color: #eeeeee;
font-family: 'NotoSansCJKKR';
font-size: 12px;
`
export const CheckBox = styled.div`
display: flex;
align-items: center;
`
export const MenuList = styled.div`
display: flex;
margin: 31px 0 17px 0;
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
margin: 0 8px 0 0px;
`
export const MenuName = styled.div`
width: 25px;
`
export const Wrapper = styled.div`
display: block;
font-size: 12px;
`
export const SelectAll = styled.div`
width: 45px;
margin-top: 6px;
`
export const MemoOption = styled.div`
font-size: 12px;
width: 23px;
color: #999999;
cursor: pointer;

`
export const ReceiveDate = styled.div`
font-size: 12px;
width: 67px;
color: #999999;
`
export const DivideLine = styled.img`
width: 16px;
height: 16px;
`
export const AlertProp = styled.div`
display: flex;
`
export const StorageAlert = styled.li`
display: flex;
color: #222222;
padding: 0 0 15px 0;
margin: 15px 0 0 0;
border-bottom: 1px solid #eeeeee;
`
export const MemoAlertWrapper = styled.div`
display: block;
`
export const AlertContent = styled.div`
display: flex;
`
export const AlertTitle = styled.a`
    width: 899px;
    max-width: 899px;
    max-height: 18px;
    margin-right: 40px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const MemoCircle = styled.div`
    width: 8px;
    height: 8px;
    margin: 5px 8px 0px 8px;
    background-color: #ffd25d;
    border-radius: 50%;
`
export const MemoWrapper = styled.div`
    display: flex;
`
export const memoContent = styled.div`
    display: block;
    height: 73px;
`

export const LetterCounter = styled.div`
    position: relative;
    text-align: right;
    left: 980px;
    bottom: 30px;
    width: 52px;
    height: 20px;
    font-size: 12px;
`

export const LettterLength = styled.span`
    color: ${props => props.children[0]<100? 'black':'yellow'};
`

export const KeyWordAlertList = styled.ol`
    height: 600px;
    overflow-y: ${props => props.scrollOption?'scroll':'none'};
`