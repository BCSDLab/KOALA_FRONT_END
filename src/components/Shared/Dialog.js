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

const slideUp = keyframes`
    from {
        transform: translateY(10px);
        transition: all .4s ease-out;
    }
    to {
        transform: translateY(-48px);
        transition: all .4s ease-out;
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(-48px);
        transition: all .4s ease-out;
    }
    to {
        transform: translateY(10px);
        transition: all .4s ease-out;
    }
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  z-index: 100;
  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: calc(100% - 40px);
  max-width: 376px;
  height: auto;
  min-height: 148px;
  padding: 24px 24px 16px;
  background: white;
  border-radius: 2px;
  animation-duration: 0.25s;
  animation-timing-function: ease-out; // 처음에 빨랐다가 나중에 느려진다.
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: relative;
  z-index: 200;
  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  display: flex;
  bottom: 16px;
  right: 24px;
  position: absolute;
  justify-content: flex-end;
`;

const CancelButton = styled.button`
  width: auto;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.darkgray};
  font-size: 16px;
  line-height: 1.14;
  letter-spacing: 1.25px;
  outline: none;
  text-align: center;
  :hover {
    background: none;
  }

  &:active {
    background: none;
  }
`;

const ConfirmButton = styled(CancelButton)`
  width: auto;
  border: none;
  margin-left: 40px;
  color: ${(props) => props.theme.colors.yellow};
  font-size: 16px;
  outline: none;
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

const Dialog = ({ title, children, confirmText, cancelText, onConfirm, onCancel, visible, type }) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);
  const dialogRef = useRef();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onConfirm();
    }
    if (e.key === '1' && onCancel) {
      onCancel();
    }
  };

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.focus();
    }
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;
  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible} length={length} onKeyPress={handleKeyPress} ref={dialogRef}>
        <Title>{title}</Title>
        <Description>{children}</Description>

        {type === 'confirm' ? (
          <ButtonGroup>
            <CancelButton type={type} onClick={onCancel}>
              {cancelText}
            </CancelButton>
            <ConfirmButton type={type} onClick={onConfirm}>
              {confirmText}
            </ConfirmButton>
          </ButtonGroup>
        ) : (
          <ButtonGroup>
            <ConfirmButton onClick={onConfirm}>{confirmText}</ConfirmButton>
          </ButtonGroup>
        )}
      </DialogBlock>
    </DarkBackground>
  );
};

export default Dialog;
