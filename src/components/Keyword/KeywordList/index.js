import React,{useCallback,useEffect,useState} from 'react';
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
    const [menuFilterList,setMenuFilterList] = useState(keywordList);
    const [checkAll,setCheckAll] = useState(false);
    const [readNotification, setReadNotification] = useState(false);
    const [notReadNotification, setNotReadNotification] = useState(false);
    const [keywordSearch,setKeywordSearch] = useState('');

    const onClickMenu = useCallback((e)=>{        
        const menu = e.target.innerText;
        setMenu(menu);
        setCheckAll(false);
        setReadNotification(false);
        setNotReadNotification(false);
    },[]);

    const onClickAllSelect = useCallback(()=>{
        setCheckAll((prev)=>!prev);
    },[]);

    const onClickReadNotification = useCallback(()=>{
        setReadNotification((prev)=>!prev);
        setNotReadNotification(false);
    },[notReadNotification,menuFilterList]);

    const onClickNotReadNotification = useCallback(()=>{
        setNotReadNotification((prev)=>!prev);
        setReadNotification(false);
    },[readNotification,menuFilterList]);

    const onChangeKeywordSearch = useCallback((e)=>{

        setKeywordSearch(e.target.value);
        
    },[keywordSearch]);

    const onClickSearch = useCallback(()=>{
        const filterList = list.filter((item)=>{
            if(item.content.includes(keywordSearch)){
                return item;
            }
        });
        setList(filterList);
        setKeywordSearch('');
    },[keywordSearch]);

    useEffect(()=>{
        if(menu==='전체'){
            setList(keywordList);
            setMenuFilterList(keywordList);
        }else{
            const filterList = keywordList.filter((item)=>{
                return item.title === menu;
            });
            setList(filterList);
            setMenuFilterList(filterList);
        }
    },[menu]);

    useEffect(()=>{
        if(notReadNotification){
            const filterList = menuFilterList.filter((item)=>{
                return item.readState === '읽지 않음';
            })
            setList(filterList);
        }else if(readNotification){
            const filterList = menuFilterList.filter((item)=>{
                return item.readState === '읽음';
            })
            setList(filterList);
        }
        else{
            setList(menuFilterList);
        }
    },[notReadNotification,readNotification]);

    return(
        <>
            <KeywordHeader title={'키워드 알림'}/>
            <s.Menu>
                {menuItem.map((item)=>{
                    return(
                        <s.Item onClick={onClickMenu} key={item.id}>{item.title}</s.Item>
                    )
                })}
            </s.Menu>
            <s.ItemUnderBar menu={menu}></s.ItemUnderBar>
            <s.FilterList>
                <s.CheckBox onClick={onClickAllSelect} checkAll={checkAll} className='checkBox'></s.CheckBox>
                <s.CheckBoxTitle onClick={onClickAllSelect} className='checkTitle'>전체 선택</s.CheckBoxTitle>
                <s.FilterItem onClick={onClickReadNotification} readNotification={readNotification} className='read'>읽은 알림</s.FilterItem>
                <s.FilterItem onClick={onClickNotReadNotification} notReadNotification={notReadNotification} className='notread'>읽지 않은 알림</s.FilterItem>
                <s.FilterItem className='goStore'>
                    <s.FilterItemImage src='/asset/inbox-in.svg' alt='inbox-in'/>
                    <span>보관함으로 이동</span>
                </s.FilterItem>
                <s.FilterItem className='delete'>
                    <s.FilterItemImage src='/asset/trash.svg' alt='trash'/>
                    <span>삭제</span>
                </s.FilterItem>
                <s.SearchInput placeholder='알림대상/알림내용/키워드 입력' value={keywordSearch} onChange={onChangeKeywordSearch}></s.SearchInput>
                <s.SearchButton onClick={onClickSearch}>
                    <span>검색하기</span>
                    <s.SearchImage src='/asset/search.svg'/>
                </s.SearchButton>
            </s.FilterList>
            <s.MainList>
                {list.map((item)=>{
                    return(
                    <s.MainItem key={item.id}>
                        <s.MainCheckBox checkAll={checkAll}></s.MainCheckBox>
                        <s.MainCheckBoxTitle readState={item.readState}>{item.title}</s.MainCheckBoxTitle>
                        <s.MainContent readState={item.readState}>{item.content}</s.MainContent>
                        <s.MainReadState>{item.readState}</s.MainReadState>
                        <s.MainPeriod readState={item.readState}>{item.period}</s.MainPeriod>
                    </s.MainItem>
                    );
                })}
            </s.MainList>
        </>
    );
}

export default KeywordList;