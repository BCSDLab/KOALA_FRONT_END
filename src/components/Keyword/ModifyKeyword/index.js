import React, { useCallback,useEffect,useState } from "react";
import KeywordHeader from "../KeywordHeader";
import { getRecommendation } from "store/modifyKeyword";
import * as S from './styles';
import { useDispatch,useSelector } from "react-redux";

const AddKeyword = () => {

    const [site,setSite] = useState("");
    const [recommendList,setRecommendList]=useState([]);
    const [selectRecommendItem,setSelectRecommendItem] = useState([]);
    const [alreadyRegisterItem,setAlreadyRegisterItem] = useState(false);

    const {recommendationList} = useSelector((state)=>state.modifyKeyword);
    const dispatch = useDispatch();

    const searchSite = useCallback((e)=>{
        setSite(e.target.value);
        setAlreadyRegisterItem(false);
    },[site]);

    const onClickRecommendItem = useCallback((e)=>{

        const {innerText:value} = e.target;
        if(!selectRecommendItem.includes(site)){
            setSelectRecommendItem([...selectRecommendItem,value]);
            setSite("");
        }else{
            setSite("");
            setAlreadyRegisterItem(true);
        }

    },[selectRecommendItem,site]);

    const onClickDeleteRecommendItem = useCallback((id)=>{
        const newList = selectRecommendItem.filter((item)=>item!==selectRecommendItem[id]);
        setSelectRecommendItem(newList);
    },[selectRecommendItem]);

    useEffect(()=>{
        if(site!==""){
            dispatch(getRecommendation(site));
        }
    },[site]);

    useEffect(()=>{
        if(recommendationList.length!==0){

            if(JSON.stringify(recommendList)!==JSON.stringify(recommendationList)){
                setRecommendList([...recommendationList]);   
            }
        }
    },[recommendationList]);

    console.log(alreadyRegisterItem);

    return(
        <>
            <KeywordHeader title={"키워드 수정하기"}/>
            <S.HashtagContainer>
                <S.HashtageImage src="/asset/hashtagblack.svg" alt="hashtage_image"/>
                <S.InputKeyword>키워드 테스트</S.InputKeyword>
            </S.HashtagContainer>
            <S.SearchContainer show={site === ""} alreadyRegister={alreadyRegisterItem}>
                <S.SearchImage src="/asset/searchblack.svg" alt="search_image"/>
                <S.InputSite placeholder="알림받을 사이트 검색" value={site} onChange={searchSite} alreadyRegister={alreadyRegisterItem}></S.InputSite>
                <S.AlreadyRegisterMessage alreadyRegister={alreadyRegisterItem}>이미 등록한 사이트입니다.</S.AlreadyRegisterMessage>
            </S.SearchContainer>
            <S.RecommendContainer show={site === ""} alreadyRegister={alreadyRegisterItem}>
                {recommendList.length!==0&&recommendList.map((item,index)=>{
                    return(
                        <S.RecommendItem onClick={onClickRecommendItem} key={index}>{item}</S.RecommendItem>
                    )
                })}
            </S.RecommendContainer>
            <S.SiteContainer>
                <S.SiteList>
                    {selectRecommendItem.map((item,index)=>{
                        return(
                            <S.SiteItem key={index}>
                                <S.SiteName>{item}</S.SiteName>
                                <S.CloseBtn onClick={()=>onClickDeleteRecommendItem(index)}>
                                    <S.XImage src="/asset/x.svg" alt="x_image"/>
                                </S.CloseBtn>
                            </S.SiteItem>
                        )
                    })}
                </S.SiteList>
            </S.SiteContainer>
            <S.ImportantContainer>
                <S.CheckBox></S.CheckBox>
                <S.CheckBoxTitle>중요 알림</S.CheckBoxTitle>
                <S.CheckBoxContent>중요알림 기능은 모바일 앱에서만 확인할 수 있습니다.</S.CheckBoxContent>
            </S.ImportantContainer>
            <S.NormalContainer>
                <S.CheckBox></S.CheckBox>
                <S.CheckBoxTitle>일반 알림</S.CheckBoxTitle>
            </S.NormalContainer>
            <S.SettingContainer>
                <S.ModeContainer>
                    <S.SlientMode>무음모드에도 알림</S.SlientMode>
                    <S.SlientCheckBox></S.SlientCheckBox>
                    <S.SlientMode>진동 알림</S.SlientMode>
                    <S.VibrationCheckBox></S.VibrationCheckBox>
                    <S.SettingContent>무음모드에도 알림,진동 알림 기능은 모바일 앱에서만 적용이 가능합니다.</S.SettingContent>
                </S.ModeContainer>
                <S.AlarmContainer>
                    <S.AlarmTitle>알람주기</S.AlarmTitle>
                    <S.AlarmType>
                        <S.Type>5분</S.Type>
                        <S.Type>10분</S.Type>
                        <S.Type>15분</S.Type> 
                        <S.Type>30분</S.Type>
                        <S.Type>1시간</S.Type>
                        <S.Type>2시간</S.Type> 
                        <S.Type>4시간</S.Type>
                    </S.AlarmType>
                </S.AlarmContainer>
            </S.SettingContainer>
            <S.EditButton>수정</S.EditButton>
            <S.CancelButton>취소</S.CancelButton>
        </>
    );
}

export default AddKeyword;