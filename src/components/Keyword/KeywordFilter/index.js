import React,{useCallback,useEffect,useState,useRef} from 'react';
import * as S from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getKeywordList,deleteKeywordList,moveKeywordItem,readKeywordItem } from 'store/keyword';
import { makeDeleteQuery } from '../utils';
import KeywordList from '../KeywordList';
import KeywordMenuBar from '../KeywordMenuBar';

const KeywordFilterBar = ({isToggle}) => {
    const userInfo = useSelector((state)=>state.auth);
    const {
        keywordList,
        deleteKeywordListResponse,
        readKeywordItemResponse,
        getKeywordListResponse
    } = useSelector((state)=>state.keyword);
    const dispatch = useDispatch();
    const [list,setList] = useState([]);
    const [checkAll,setCheckAll] = useState(false);
    const [checkListId,setCheckListId] = useState([]);
    const [readNotification, setReadNotification] = useState(false);
    const [notReadNotification, setNotReadNotification] = useState(false);
    const [keywordSearch,setKeywordSearch] = useState('');
    const [goStore, setGoStore] = useState(false);
    const [deleteList, setDeleteList] = useState(false);

    const inputSearch = useRef(null);

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
        inputSearch.current.focus();
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

    const onClickReadItem = useCallback((id,isRead)=>{
        if(!isRead){
            dispatch(readKeywordItem(id));
        }
    },[])


    useEffect(()=>{
        if(list.length===0){
            return;
        }

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

        if(list.length===0){
            return;
        }

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
                setGoStore(false);
            }
        }
    },[goStore]);

    useEffect(()=>{

        if(list.length===0){
            return;
        }

        if(deleteList){
            if(checkAll){
                alert('모든 목록 삭제');

                const startId = keywordList[0].id;
                const endId = keywordList[keywordList.length-1].id;

                const query = makeDeleteQuery(startId,endId);

                dispatch(deleteKeywordList(query));
                setDeleteList(false);

            }else if(checkListId.length!==0){      
                alert('선택된 목록 삭제');

                if(checkListId.length===1){
                    const query = `notice-id=${checkListId[0]}`;
                    dispatch(deleteKeywordList(query));
                }else{

                    const startId = checkListId[0];
                    const endId = checkListId[checkListId.length-1];
                    const query = makeDeleteQuery(startId,endId);

                    dispatch(deleteKeywordList(query));
                }

                setDeleteList(false);
            }else{
                alert('알림을 선택해 주세요');
            }
        }

        setCheckAll(false);
        setDeleteList(false);
        setCheckListId([]);
    },[deleteList]);

    useEffect(()=>{
        if(userInfo.isLoggedIn||deleteKeywordListResponse||readKeywordItemResponse||getKeywordListResponse){
            dispatch(getKeywordList('키워드테스트'));

            if(keywordList === "받은 알림이 없습니다."){
                setList([]);
            }else{
                setList(keywordList);
            }
        }

    },[
        userInfo.isLoggedIn
        ,deleteKeywordListResponse
        ,readKeywordItemResponse
        ,getKeywordListResponse
    ]);

    return(
        <>
            <KeywordMenuBar
                isToggle={isToggle} 
                keywordList={keywordList}
                setCheckAll={setCheckAll}
                setReadNotification={setReadNotification}
                setNotReadNotification={setNotReadNotification}
                setCheckListId={setCheckListId}
                list={list}
            />
            <S.FilterList toggle={isToggle}>
                <S.CheckBox onClick={onClickAllSelect} checkAll={checkAll} className='checkBox'></S.CheckBox>
                <S.CheckBoxTitle onClick={onClickAllSelect} className='checkTitle'>전체 선택</S.CheckBoxTitle>
                <S.FilterItem onClick={onClickReadNotification} readNotification={readNotification} className='read'>읽은 알림</S.FilterItem>
                <S.FilterItem onClick={onClickNotReadNotification} notReadNotification={notReadNotification} className='notread'>읽지 않은 알림</S.FilterItem>
                <S.FilterItem onClick={onClickGoStore} goStore={goStore} className='goStore'>
                    <S.FilterItemImage src='/asset/inbox-in.svg' alt='inbox-in'/>
                    <span>보관함으로 이동</span>
                </S.FilterItem>
                <S.FilterItem onClick={onClickDeleteList} className='delete'>
                    <S.FilterItemImage src='/asset/trash.svg' alt='trash'/>
                    <span>삭제</span>
                </S.FilterItem>
                <S.SearchInput ref={inputSearch} placeholder='알림대상/알림내용/키워드 입력' value={keywordSearch} onChange={onChangeKeywordSearch}></S.SearchInput>
                <S.SearchButton onClick={onClickSearch}>
                    <span>검색하기</span>
                    <S.SearchImage src='/asset/search.svg'/>
                </S.SearchButton>
            </S.FilterList>
            <KeywordList list={list}
                onClickCheckSome={onClickCheckSome}
                checkListId={checkListId}
                checkAll={checkAll}
                onClickReadItem={onClickReadItem}
                isToggle={isToggle}/>
        </>
    );
}

export default KeywordFilterBar;