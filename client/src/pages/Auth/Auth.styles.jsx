import styled from 'styled-components';
import Colors from '../../helpers/Colors';

export const Wrapper = styled.div`
  position: relative; 
  max-width: 400px;
  margin: 40px auto;
  padding: 20px; 
  background-color: white;
  border-radius: 15px; 
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 40px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 60px; 
  }

  @media (max-width: 720px) {
    background-color: #fbfcfe;
    box-shadow: none;
    padding: 15px; 
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 22px;
  font-weight: bold; 
  color: ${Colors.primary}; 
`;

export const SubHeading = styled.h3`
  font-size: 16px;
  color: #7d7f81; 
`;

export const Span = styled.span`
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: #7d7f81;
`;

export const Activator = styled.span`
  cursor: pointer;
  font-size: 14px;
  color: ${Colors.default};
  text-decoration: underline; 
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${Colors.hover};
  }
`;

export const ContainerFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px; 
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const GoogleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  height: 45px;
  color: black;
  border: none; 
  font-size: 1em;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  background-color: ${Colors.primary}; 
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  &:hover {
    background-color: ${Colors.hover}; 
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px;
  }
`;

export const GoogleImg = styled.img`
  width: 20px;
  height: 20px; 
`;

export const ErrorMsg = styled.span`
  font-size: 0.8em;
  color: red;
  margin-right: auto;
  margin-top: -10px; 
  text-align: left; 
`;

// Adjust the Lottie component's width and height in your component file as well
