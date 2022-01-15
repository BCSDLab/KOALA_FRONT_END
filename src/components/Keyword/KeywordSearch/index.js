import React,{useRef,useState,useCallback} from "react";
import * as S from './styles';

const KeywordSearch = ({setList,list}) => {

    const inputSearch = useRef(null);
    const [keywordSearch,setKeywordSearch] = useState('');

    const onChangeKeywordSearch =(e)=>{
        setKeywordSearch(e.target.value);
    };

    const onClickSearch =useCallback(()=>{    
        const filterList = list.filter((item)=>{
            if(`${item.title}`.includes(`${keywordSearch}`)){
                return item;
            }
        });
        setList(filterList);
        setKeywordSearch('');
        inputSearch.current.focus();
    },[list]);

    return(
        <>
            <S.SearchInput ref={inputSearch} placeholder='알림대상/알림내용/키워드 입력' value={keywordSearch} onChange={onChangeKeywordSearch}></S.SearchInput>
                <S.SearchButton onClick={onClickSearch}>
                    <span>검색하기</span>
                    <S.SearchImage src='/asset/search.svg'/>
            </S.SearchButton>
        </>
    );
}

export default KeywordSearch;