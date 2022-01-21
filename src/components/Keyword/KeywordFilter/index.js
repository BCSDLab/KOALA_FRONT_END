import React,{useEffect,useState,useCallback} from 'react';
import * as S from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getKeywordList,deleteKeywordList,moveKeywordItem} from 'store/keyword';
import { makeDeleteQuery } from '../utils';
import KeywordList from '../KeywordList';
import KeywordMenuBar from '../KeywordMenuBar';
import KeywordSearch from '../KeywordSearch';

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
    const [keywordSearch,setKeywordSearch] = useState('');
    const [searchButton,setSearchButton] = useState(false);
    const [menu,setMenu] = useState('전체');
    const [checkListId,setCheckListId] = useState([]);
    const [readNotification, setReadNotification] = useState(false);
    const [notReadNotification, setNotReadNotification] = useState(false);
    const [goStore, setGoStore] = useState(false);
    const [deleteList, setDeleteList] = useState(false);

    const onClickAllSelect = () => {

        setCheckAll((prev)=>!prev);
    };

    const onClickReadNotification = ()=>{

        setReadNotification((prev)=>!prev);
        setNotReadNotification(false);
    };

    const onClickNotReadNotification = ()=>{

        setNotReadNotification((prev)=>!prev);
        setReadNotification(false);
    };

    const onClickMenu = useCallback((e)=>{

        setMenu(e.target.innerText);
        setCheckAll(false);
        setReadNotification(false);
        setNotReadNotification(false);
        setCheckListId([]);

        if(list.length===0){
            return;
        }

    },[keywordList,menu,list]);

    const onClickGoStore = ()=>{
        setGoStore(true);
    };

    const onClickDeleteList = ()=>{
        setDeleteList(true);
    };

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
                    const id = item.id;
                    dispatch(moveKeywordItem(id));
                })

            }else if(checkListId.length!==0){

                alert('선택된 목록 보관');
                const filterList = list.filter((item)=>{
                    const id = item.id;
                    if(checkListId.includes(id)){
                        return item;
                    }
                })

                filterList.forEach((item)=>{
                    const id = item.id;
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

    useEffect(()=>{
        if(menu === '전체'){
            setList(keywordList);
        }else if(menu === '아우누리'){

            const filterList = keywordList.filter((item)=>{
                if(item.site === 'PORTAL'){
                    return item;
                }
            });
            setList(filterList);
        }else if(menu === '아우미르'){

            const filterList = keywordList.filter((item)=>{
                if(item.site === 'DORM'){
                    return item;
                }
            });
            setList(filterList);
        }else{
            setList([]);
        }
    },[menu]);

    useEffect(()=>{

        const filterList = list.filter((item)=>{
            if(`${item.title}`.includes(`${keywordSearch}`)){
                return item;
            }
        });
        setList(filterList);
        setKeywordSearch('');
        setSearchButton(false);

    },[searchButton])
    
    return(
        <>
            <KeywordMenuBar
                isToggle={isToggle}
                menu={menu}
                list={list}
                setList={setList}
                onClickMenu={onClickMenu}
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
                <KeywordSearch setList={setList} list={list} keywordSearch={keywordSearch} setKeywordSearch={setKeywordSearch} setSearchButton={setSearchButton}/>
            </S.FilterList>
            <KeywordList 
                list={list}
                checkListId={checkListId}
                setCheckListId={setCheckListId}
                checkAll={checkAll}
                isToggle={isToggle}/>
        </>
    );
}

export default KeywordFilterBar;