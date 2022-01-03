import React,{useCallback,useState} from 'react';
import keywordList from './dummy';
import KeywordHeader from '../KeywordHeader';
import * as s from './styles';

const menuItem = [
    {   
        id:0,
        title:'전체'
    },
    {   
        id:1,
        title:'아우누리'
    },
    {   
        id:2,
        title:'아우미르'
    },
    {   
        id:3,
        title:'대신 전해드립니다-koreatech'
    },
];


const KeywordList = () => {

    const [menu,setMenu] = useState('전체');
    const [list,setList] = useState(keywordList);
    const [checkAll,setCheckAll] = useState(false);

    const onClickMenu = useCallback((e)=>{        
        const menu = e.target.innerText;

        if(menu==='전체'){
            setList(keywordList);
        }else{
            const filterList = keywordList.filter((item)=>{
                return item.title === menu;
            });
            setList(filterList);
        }

        setMenu(menu);
        setCheckAll(false);

    },[list]);

    const onClickAllSelect = useCallback(()=>{
        setCheckAll((prev)=>!prev);
    });

    return(
        <>
            <KeywordHeader title={'키워드 알림'}/>
            <s.Menu>
                {menuItem.map((item)=>{
                    return(
                        <s.Item onClick={(e)=>onClickMenu(e)} key={item.id}>{item.title}</s.Item>
                    )
                })}
            </s.Menu>
            <s.ItemUnderBar menu={menu}></s.ItemUnderBar>
            <s.FilterList>
                <s.CheckBox onClick={onClickAllSelect} checkAll={checkAll} className='checkBox'></s.CheckBox>
                <s.CheckBoxTitle onClick={onClickAllSelect} className='checkTitle'>전체 선택</s.CheckBoxTitle>
                <s.FilterItem className='read'>읽은 알림</s.FilterItem>
                <s.FilterItem className='notread'>읽지 않은 알림</s.FilterItem>
                <s.FilterItem className='goStore'>
                    <s.FilterItemImage src='/asset/inbox-in.svg' alt='inbox-in'/>
                    <span>보관함으로 이동</span>
                </s.FilterItem>
                <s.FilterItem className='delete'>
                    <s.FilterItemImage src='/asset/trash.svg' alt='trash'/>
                    <span>삭제</span>
                </s.FilterItem>
                <s.SearchInput placeholder='알림대상/알림내용/키워드 입력'></s.SearchInput>
                <s.SearchButton>
                    <span>검색하기</span>
                    <s.SearchImage src='/asset/search.svg'/>
                </s.SearchButton>
            </s.FilterList>
            <s.MainList>
                {list.map((item)=>{
                    return(
                    <s.MainItem key={item.id}>
                        <s.MainCheckBox checkAll={checkAll}></s.MainCheckBox>
                        <s.MainCheckBoxTitle>{item.title}</s.MainCheckBoxTitle>
                        <s.MainContent>{item.content}</s.MainContent>
                        <s.MainReadState>{item.readState}</s.MainReadState>
                        <s.MainPeriod>{item.period}</s.MainPeriod>
                    </s.MainItem>
                    );
                })}
            </s.MainList>
        </>
    );
}

export default KeywordList;