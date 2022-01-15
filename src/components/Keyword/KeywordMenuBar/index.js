import React,{useCallback,useState} from "react";
import * as S from './styles';
import { MENU_ITEM,AUNURI,AOUMIR } from "constant";

const KeywordMenuBar = ({
        isToggle,
        keywordList,
        setCheckAll,
        setReadNotification,
        setNotReadNotification,
        setCheckListId,
        list
    }) => {

    const [menu,setMenu] = useState('전체');

    const onClickMenu = useCallback((e)=>{

        setMenu(e.target.innerText);
        setCheckAll(false);
        setReadNotification(false);
        setNotReadNotification(false);
        setCheckListId([]);

        if(list.length===0){
            return;
        }

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


    return(
        <>
            <S.Menu toggle={isToggle}>
                {MENU_ITEM.map((item)=>{
                    return(
                        <S.Item onClick={onClickMenu} key={item.id}>{item.title}</S.Item>
                    )
                })}
            </S.Menu>
            <S.ItemUnderBar menu={menu} toggle={isToggle}></S.ItemUnderBar>
        </>
    );
}

export default KeywordMenuBar;