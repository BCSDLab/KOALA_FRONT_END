import React,{useCallback,useEffect,useState} from 'react';
import KeywordHeader from '../KeywordHeader';
import * as s from './styles';
import { menuItem } from '../constant';
import { useSelector, useDispatch } from 'react-redux';
import { inquiry,getKeywordList,deleteKeywordList,deleteKeywordItem,moveKeywordItem } from 'store/keyword';
import { AUNURI,AOUMIR } from '../constant';

const KeywordList = () => {

    const userInfo = useSelector((state)=>state.auth);
    const {keywordList} = useSelector((state)=>state.keyword);
    const dispatch = useDispatch();

    const [menu,setMenu] = useState('전체');
    const [list,setList] = useState('');
    const [checkAll,setCheckAll] = useState(false);
    const [checkListId,setCheckListId] = useState([]);
    const [readNotification, setReadNotification] = useState(false);
    const [notReadNotification, setNotReadNotification] = useState(false);
    const [keywordSearch,setKeywordSearch] = useState('');
    const [goStore, setGoStore] = useState(false);
    const [deleteList, setDeleteList] = useState(false);


    //utills
    const getTitle = (url) => {
        if(url.includes(AUNURI)){
            return '아우누리'
        }else if(url.includes(AOUMIR)){
            return '아우미르'
        }else{
            return '대신 전해드립니다 - koreatech'
        }
    }

    const onClickMenu = useCallback((e)=>{        
        const menu = e.target.innerText;
        setMenu(menu);
        setCheckAll(false);
        setReadNotification(false);
        setNotReadNotification(false);
        setCheckListId([]);

        if(menu === '전체'){
            setList(keywordList);
        }else if(menu === '아우누리'){
            const filterList = keywordList.filter((item)=>{
                if(item.url.includes(AUNURI)){
                    return item;
                }
            })

            setList(filterList);
        }else if(menu === '아우미르'){
            const filterList = keywordList.filter((item)=>{
                if(item.url.includes(AOUMIR)){
                    return item;
                }
            })

            setList(filterList);
        }

    },[keywordList]);

    const onClickAllSelect = useCallback(()=>{

        setCheckAll((prev)=>!prev);
        
    },[list,checkAll]);

    const onClickReadNotification = useCallback(()=>{
        setReadNotification((prev)=>!prev);
        setNotReadNotification(false);
    },[notReadNotification]);

    const onClickNotReadNotification = useCallback(()=>{
        setNotReadNotification((prev)=>!prev);
        setReadNotification(false);
    },[readNotification]);

    const onChangeKeywordSearch = useCallback((e)=>{
        setKeywordSearch(e.target.value);
    },[keywordSearch]);

    const onClickSearch = useCallback((e)=>{    
        
        const filterList = list.filter((item)=>{
            
            if(`${item.title}`.includes(`${keywordSearch}`)){
                return item;
            }
        });

        setList(filterList);
        setKeywordSearch('');
    },[list,keywordSearch]);

    const onClickGoStore = useCallback(()=>{
        setGoStore(true);
    },[]);

    const onClickDeleteList = useCallback(()=>{
        setDeleteList(true);
    },[]);

    const onClickCheckSome = useCallback((id)=>{


        let newCheckListId = [...checkListId];

        if(checkListId.includes(id)){
            
            newCheckListId = checkListId.filter((item)=>{
                if(item !== id){
                    return item;
                }
            })

            setCheckListId(newCheckListId);
        }else{
            newCheckListId.push(id);
            setCheckListId(newCheckListId);
        }

    },[checkListId]);

    useEffect(()=>{
        if(notReadNotification){
            const filterList = keywordList.filter((item)=>{
                return item.isRead === false;
            })
            setList(filterList);
        }else if(readNotification){
            const filterList = keywordList.filter((item)=>{
                return item.isRead === true;
            })
            setList(filterList);
        }else{
            setList(keywordList);
        }
    },[notReadNotification,readNotification]);

    useEffect(()=>{
        if(goStore){
            if(checkAll){
                alert('모든 목록 보관');
                setCheckAll(false);
                setGoStore(false);

                keywordList.forEach((item)=>{
                    const id = item.id
                    dispatch(moveKeywordItem(id));
                })

            }else if(checkListId.length!==0){

                alert('선택된 목록 보관');
                const filterList = list.filter((item)=>{
                    const id = item.id
                    if(checkListId.includes(id)){
                        return item;
                    }
                })

                filterList.forEach((item)=>{
                    const id = item.id
                    dispatch(moveKeywordItem(id));
                })

                setGoStore(false);
                
            }else{
                alert('알림을 선택해 주세요');
                setGoStroe(false);
            }
        }

    },[goStore]);

    useEffect(()=>{
        if(deleteList){
            if(checkAll){
                alert('모든 목록 삭제');

                const startId = keywordList[0].id;
                const endId = keywordList[keywordList.length-1].id;

                dispatch(deleteKeywordList({startId,endId}));
                setDeleteList(false);

            }else{      
                alert('선택된 목록 삭제');

                for(let i in checkListId){
                    dispatch(deleteKeywordItem({id:i}));
                }

                setDeleteList(false);
            }
        }

        setCheckAll(false);
        setCheckListId([]);

    },[deleteList]);

    useEffect(()=>{

        if(userInfo.isLoggedIn){
            dispatch(inquiry());
            dispatch(getKeywordList('키워드테스트'));
        }
    },[userInfo.isLoggedIn]);

    useEffect(()=>{
        setList(keywordList);
    },[keywordList,deleteList]);


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
                {list&&list.map((item)=>{
                    return(
                    <s.MainItem key={item.id}>
                        <s.MainCheckBox onClick={() => onClickCheckSome(item.id)} checkSome={checkListId.includes(item.id)} checkAll={checkAll}></s.MainCheckBox>
                        <s.MainCheckBoxTitle readState={item.isRead}>{getTitle(item.url)}</s.MainCheckBoxTitle>
                        <s.MainContent readState={item.isRead}>{item.title}</s.MainContent>
                        <s.MainReadState>{item.isRead?"읽음":"읽지 않음"}</s.MainReadState>
                        <s.MainPeriod readState={item.isRead}>{item.createdAt}</s.MainPeriod>
                    </s.MainItem>
                    );
                })}
            </s.MainList>
        </>
    );
}

export default KeywordList;