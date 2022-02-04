import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inquiry } from 'store/keyword';
import * as S from 'components/SideNavbar/styles';
import { useNavigate } from 'react-router';

const KeywordDropdown = () => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [selectItemId, setSelectItemId] = useState(false);
  const [selectAddKeyword, setSelectAddKeyword] = useState(false);

  const { keywords } = useSelector((state) => state.keyword);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClickDropdownButton = () => {
    setDropdownToggle((prev) => !prev);
  };

  const onClickItem = (id, name) => {
    setSelectItemId(id);
    navigate(`/keyword`, { state: name });
  };

  const onClickAddKeyword = () => {
    setSelectAddKeyword(true);
    navigate('/keyword/create');
  };

  if (keywords === undefined) {
    console.log('keywords undefined임!');
    dispatch(inquiry());
  }

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
              selectItemId={selectItemId === keyword.id}
              onClick={() => onClickItem(keyword.id, keyword.name)}
            >
              <S.KeywordName selectItemId={selectItemId === keyword.id}>{keyword.name}</S.KeywordName>
              <S.KeywordCount selectItemId={selectItemId === keyword.id}>{keyword.noticeNum}</S.KeywordCount>
            </S.KeywordSection>
          ))}
      </S.KeywordList>
      <S.AddKeywordSection selectAddKeyword={selectAddKeyword} onClick={onClickAddKeyword} onClick={onClickAddKeyword}>
        <S.AddImg
          selectAddKeyword={selectAddKeyword}
          src={selectAddKeyword ? '/asset/plus_white.svg' : '/asset/Plus.svg'}
          alt="add keyword"
        />
        <S.AddText selectAddKeyword={selectAddKeyword} to="/keyword/create">
          키워드 추가하기
        </S.AddText>
      </S.AddKeywordSection>
    </S.KeywordDropdown>
  );
};

export default KeywordDropdown;
