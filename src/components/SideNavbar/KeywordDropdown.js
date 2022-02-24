import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import keyword, { inquiry } from 'store/keyword';
import * as S from 'components/SideNavbar/styles';
import { useNavigate } from 'react-router';
import KeywordModal from 'components/Keyword/KeywordModal';
import styled from 'styled-components';
import { getKeywordName, getKeywordPosition } from 'components/Keyword/utils';
import useMatchMedia from 'hooks/useMatchMedia';
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: none;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
  display: ${(props) => (props.showModal ? 'block' : 'none')};
`;

const KeywordDropdown = () => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [selectItemId, setSelectItemId] = useState(null);
  const [selectAddKeyword, setSelectAddKeyword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { keywords } = useSelector((state) => state.keyword);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickDropdownButton = () => {
    setDropdownToggle((prev) => !prev);
  };

  const onClickItem = (id, name) => {
    setSelectItemId(id);
    setSelectAddKeyword(false);
    navigate(`/keyword`, { state: name });
  };

  const onClickAddKeyword = () => {
    setSelectAddKeyword(true);
    setSelectItemId(false);
    navigate('/keyword/create');
  };

  const onClickBackground = () => {
    setShowModal(false);
  };

  const onClickSetting = () => {
    setSelectAddKeyword(false);
    setSelectItemId(null);
  };

  const onMouseOverModal = (check) => {
    setShowModal(check);
  };

  if (keywords === undefined) {
    dispatch(inquiry());
  }
  const queries = ['(max-width: 450px)'];
  const [mobile] = useMatchMedia(queries);
  const findPresentKeyword = (index) => {
    return keywords[index];
  };
  return mobile ? (
    location.pathname.includes('/keyword') ? (
      <S.MobileKeyWordHeader>
        <S.BackBtn src="/asset/BackArrow.svg" />
        <S.MobileKeyWordName>
          {findPresentKeyword(keywords.findIndex((keyword) => keyword.id === selectItemId))
            ? console.log(findPresentKeyword(keywords.findIndex((keyword) => keyword.id === selectItemId)).name)
            : null}
        </S.MobileKeyWordName>
        <S.FixKeyWordBtn to="/keyword/modify">수정</S.FixKeyWordBtn>
      </S.MobileKeyWordHeader>
    ) : null
  ) : (
    <>
      <Background onClick={onClickBackground} showModal={showModal} />
      <S.KeywordDropdown>
        <KeywordModal
          selectItemId={selectItemId}
          showModal={showModal}
          setShowModal={setShowModal}
          keywordName={getKeywordName(keywords, selectItemId)}
          modalPosition={getKeywordPosition(keywords, selectItemId)}
        />
        <S.KeywordMain>키워드</S.KeywordMain>
        <S.KeywordDropdownButton src="/asset/KeywordDropDown.svg" alt="drop" onClick={onClickDropdownButton} />
        <S.KeywordSetting to="mypage" onClick={onClickSetting}>
          설정
        </S.KeywordSetting>
        <S.KeywordList dropdownToggle={dropdownToggle}>
          {keywords &&
            keywords.map((keyword) => (
              <S.KeywordSection
                key={keyword.id}
                onMouseOver={(e) => onMouseOverModal(selectItemId === keyword.id, e)}
                selectItemId={selectItemId === keyword.id}
                onClick={() => onClickItem(keyword.id, keyword.name)}
              >
                <S.KeywordName selectItemId={selectItemId === keyword.id}>{keyword.name}</S.KeywordName>
                <S.KeywordCount selectItemId={selectItemId === keyword.id}>{keyword.noticeNum}</S.KeywordCount>
              </S.KeywordSection>
            ))}
        </S.KeywordList>
        <S.AddKeywordSection selectAddKeyword={selectAddKeyword} onClick={onClickAddKeyword}>
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
    </>
  );
};

export default KeywordDropdown;
