import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  width: 100%;
  height: 50px;
  background: linear-gradient(135deg, #4e54c8, #8f94fb); /* Gradient color */
  color: white;
  font-size: 1.3em;
  border: none;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #8f94fb, #4e54c8); /* Hover gradient */
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    background: linear-gradient(135deg, #3e42b5, #7b81e7); /* Active gradient */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: #b2b2b2; /* Disabled state color */
    box-shadow: none;
  }
`;

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: ${spinner} 1s linear infinite;
`;
