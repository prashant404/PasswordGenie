import styled from 'styled-components';
import Colors from '../../helpers/Colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  padding: 20px;
  transition: all 0.3s ease-in-out;
  
  @media (max-width: 720px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 720px) {
    gap: 15px;
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
  }
`;

export const Span = styled.span`
  font-size: 1em;
  color: ${Colors.primary};
  font-weight: 600;
  letter-spacing: 0.05em;
`;

export const Desclaimer = styled.span`
  font-size: 0.9em;
  color: #666;
  line-height: 1.6;
`;

export const TextContainer = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #333;
  font-size: 1.1em;

  @media (max-width: 720px) {
    text-align: center;
  }
`;

export const Img = styled.img`
  max-width: 350px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
