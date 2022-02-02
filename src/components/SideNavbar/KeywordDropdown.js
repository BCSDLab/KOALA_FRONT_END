import React, { useEffect, useState } from 'react';
import * as S from 'components/SideNavbar/styles';
import { inquiry } from 'store/keyword';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const KeywordDropdown = () => {
  const { keywords } = useSelector((state) => state.keyword);
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [selectItemId, setSelectItemId] = useState(null);
  const userInfo = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickDropdownButton = () => {
    setDropdownToggle((prev) => !prev);
  };

  const onMouseOverItem = (id, name) => {
    setSelectItemId(id);
    navigate('/keyword', { state: name });
  };

  const onMouseOutItem = () => {
    setSelectItemId(null);
  };

  useEffect(() => {
    if (userInfo.isLoggedIn) {
      dispatch(inquiry());
    }
  }, [userInfo]);

  return (
    <S.KeywordDropdown>
      <S.KeywordMain>키워드</S.KeywordMain>
      <S.KeywordDropdownButton src="/asset/KeywordDropDown.svg" alt="drop" onClick={onClickDropdownButton} />
      <S.KeywordSetting to="">설정</S.KeywordSetting>
      <S.KeywordList dropdownToggle={dropdownToggle}>
        {keywords &&
          keywords.map((keyword) => (
            <S.KeywordSection
              key={keyword.id}
              onMouseOut={onMouseOutItem}
              selectItemId={selectItemId === keyword.id}
              onMouseOver={() => onMouseOverItem(keyword.id, keyword.name)}
            >
              <S.KeywordName selectItemId={selectItemId === keyword.id}>{keyword.name}</S.KeywordName>
              <S.KeywordCount selectItemId={selectItemId === keyword.id}>{keyword.noticeNum}</S.KeywordCount>
            </S.KeywordSection>
          ))}
      </S.KeywordList>
      <S.AddKeywordSection>
        <S.AddImg src="/asset/Plus.svg" alt="add keyword" />
        <S.AddText to="/">키워드 추가하기</S.AddText>
      </S.AddKeywordSection>
    </S.KeywordDropdown>
  );
};

export default KeywordDropdown;
