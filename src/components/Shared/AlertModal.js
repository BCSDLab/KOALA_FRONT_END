import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const AlertModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AlertModalBlock = styled.div`
  width: calc(100% - 8px);
  max-width: 368px;
  height: auto;
  min-height: 148px;
  padding: 24px 24px 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: relative;
  z-index: 200;

  animation-duration: 0.15s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const ButtonGroup = styled.div`
  display: flex;
  bottom: 18px;
  right: 15px;
  position: absolute;
  justify-content: flex-end;
`;

const ConfirmButton = styled.button`
  width: auto;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.darkgray};
  font-size: 14px;
  font-weight: 500;
  outline: none;
  line-height: 1.14;
  letter-spacing: 1.25px;
  text-align: center;

  :hover {
    background: none;
  }
  &:active {
    background: none;
  }
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
`;

const AlertModal = ({ title, desc, confirmText, onConfirm, onCancel, visible, type }) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);
  const alertModalRef = useRef();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onConfirm();
    }
  };

  useEffect(() => {
    if (alertModalRef.current) {
      alertModalRef.current.focus();
    }
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;
  return (
    <AlertModalWrapper>
      <AlertModalBlock disappear={!visible} length={length} onKeyPress={handleKeyPress} ref={alertModalRef}>
        <Title>{title}</Title>
        <Description>{desc}</Description>

        <ButtonGroup>
          <ConfirmButton type={type} onClick={onConfirm}>
            {confirmText}
          </ConfirmButton>
        </ButtonGroup>
      </AlertModalBlock>
    </AlertModalWrapper>
  );
};

export default AlertModal;
