import React,{useCallback,useEffect,useState} from 'react';
import keywordList from './dummy';
import KeywordHeader from '../KeywordHeader';
import * as s from './styles';
import { menuItem } from '../constant';

const KeywordList = () => {

    const [menu,setMenu] = useState('전체');
    const [list,setList] = useState(keywordList);
    const [menuFilterList,setMenuFilterList] = useState(keywordList);
    const [checkAll,setCheckAll] = useState(false);
    const [readNotification, setReadNotification] = useState(false);
    const [notReadNotification, setNotReadNotification] = useState(false);
    const [keywordSearch,setKeywordSearch] = useState('');
    const [goStore, setGoStore] = useState(false);
    const [deleteList, setDeleteList] = useState(false);

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

    const onClickGoStore = useCallback(()=>{
        setGoStore(true);
    },[]);

    const onClickDeleteList = useCallback(()=>{
        setDeleteList(true);
    },[]);

    const onClickCheckSome = useCallback((id)=>{
        const filterList = list.map((item)=>{
            if(id === item.id){
               item.select = !item.select;
            }
            return item;
        })

        setList(filterList);
    },[list]);

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

    useEffect(()=>{
        if(goStore){
            if(checkAll){
                alert('모든 목록 보관');
                const filterList = [];
                setList(filterList);
                setCheckAll(false);
                setGoStore(false);

            }else{      
                alert('선택된 목록 보관');
                const filterList = list.filter((item)=>{
                    return item.select!==true;
                })

                setList(filterList);
                setGoStore(false);
            }
        }
    },[goStore]);

    useEffect(()=>{
        if(deleteList){
            if(checkAll){
                alert('모든 목록 삭제');
                const filterList = [];
                setList(filterList);
                setCheckAll(false);
                setDeleteList(false);

            }else{      
                alert('선택된 목록 삭제');
                const filterList = list.filter((item)=>{
                    return item.select!==true;
                })

                setList(filterList);
                setGoStore(false);
                setDeleteList(false);
            }
        }
    },[deleteList]);

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
                <s.FilterItem onClick={onClickGoStore} goStore={goStore} className='goStore'>
                    <s.FilterItemImage src='/asset/inbox-in.svg' alt='inbox-in'/>
                    <span>보관함으로 이동</span>
                </s.FilterItem>
                <s.FilterItem onClick={onClickDeleteList} className='delete'>
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
                        <s.MainCheckBox onClick={() => onClickCheckSome(item.id)} checkSome={item.select} checkAll={checkAll}></s.MainCheckBox>
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