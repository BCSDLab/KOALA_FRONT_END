import styled from "styled-components"
export const SelectAll = styled.div`
    margin: 0 25px 6px 0;
`
export const KeyWordAlert = styled.li`
    display: flex;
    justify-content: space-between;
    color: ${props => props.isRead?'#999999':'#222222'};
    padding: 15px 0 15px 0;
    border-bottom: 1px solid #eeeeee;
`
export const KeyWordAlertList = styled.ol``
export const Sender = styled.div`
    font-size: 12px;
    margin-right: 119px;
`
export const AlertTitle = styled.a`
    width: 899px;
    max-width: 899px;
    max-height: 18px;
    margin-right: 40px;
    font-size: 12px;
    color: ${props => props.isRead?'#999999':'#222222'};
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const MailBrowse = styled.div`
    width: 47px;
    margin-right: 24px;
    text-align: center;
    font-size: 12px;
    color: #999999;
`
export const ReceiveDate = styled.div`
    width: 67px;
    font-size: 12px;
`
export const MenuList = styled.div`
    display: flex;
    align-items: center;
    margin: 31px 0 17px 0;
    &: last-child{
        margin-right: 0;
    }
`
export const Menues = styled.div`
    display: flex;
    padding: 8px;
    align-items: center;
    border: solid 1px ${props => props.isClicked?'#222222':'#eeeeee'};
    margin-right: 15px;
    color: ${props => props.isClicked?'#222222':'#999999'};
    cursor: pointer;
`
export const MenuLogo = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 8px;
`
export const MenuName = styled.div`
`

export const PageWrapper = styled.div`
    display: block;
    width: 1284px;
    font-size: 12px;
`
