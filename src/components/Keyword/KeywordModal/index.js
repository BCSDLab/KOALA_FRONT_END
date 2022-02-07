import React, { useEffect } from 'react';
import styled from 'styled-components';
import { deleteKeyword } from 'store/keyword';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const ModalContainer = styled.div`
  width: 168px;
  height: 114px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 205px;
  top: 75px;
  background-color: #fff;
  border: 1px solid #eee;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  z-index: 100;
`;

const KeywordDeleteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 12px;
  margin-bottom: 24px;
  cursor: pointer;
`;

const DeleteTitle = styled.span``;

const EditTitie = styled.span``;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const KeywordEditContainer = styled.div`
  display: flex;
  padding: 0px 12px;
  justify-content: space-between;
  cursor: pointer;
`;

const KeywordModal = ({ showModal, selectItemId, setShowModal, keywordName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickDelete = () => {
    setShowModal(false);
    dispatch(deleteKeyword(keywordName));
  };

  const onClickEdit = () => {
    navigate('/keyword/modify', { state: keywordName });
    setShowModal(false);
  };

  const onMouseOutModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };

  useEffect(() => {
    setShowModal(false);
  }, [selectItemId]);

  return (
    <>
      {selectItemId && showModal ? (
        <ModalContainer onClick={onMouseOutModal}>
          <KeywordDeleteContainer onClick={onClickDelete}>
            <DeleteTitle>삭제</DeleteTitle>
            <Icon src="/asset/trash.svg" />
          </KeywordDeleteContainer>
          <KeywordEditContainer onClick={onClickEdit}>
            <EditTitie>키워드 편집</EditTitie>
            <Icon src="/asset/pencil.svg" />
          </KeywordEditContainer>
        </ModalContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default KeywordModal;
