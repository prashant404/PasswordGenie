import styled from 'styled-components';

export const InputWrapper = styled.div`
  justify-content: center;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 40px 12px 10px;
  font-size: 16px;
  outline: none;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: #333;
  transition: all 0.3s ease-in-out;
  
  &:focus {
    border-color: #0c77b1;
    background-color: #fff;
  }

  &:hover {
    border-color: #b0b0b0;
  }
`;

export const Label = styled.label`
  color: #333;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const IconButton = styled.i`
  color: #7f7f7f;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #0c77b1;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
