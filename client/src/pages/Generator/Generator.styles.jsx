import styled from 'styled-components';
import Colors from '../../helpers/Colors';

export const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #dadce0;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; // Added padding for inner spacing
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05); // Subtle shadow for depth
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 20px;
  width: 100%;
`;

export const PasswordContainer = styled.div`
  position: relative;
  padding: 20px;
  margin: auto;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 90%;
  min-height: 100px;
  color: #000000;  // Changed text color to black
  background-color: ${Colors.lightPrimary};
  border-radius: 10px;
  border: 1px solid #dadce0;
`;

export const PasswordWrapper = styled.div`
  width: 90%;
  color: #000000;  // Ensures text inside the wrapper is black
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;


export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 12px; // Slightly smaller border-radius for a sleeker look
  border: 1px solid #dadce0;
  font-size: 1em;
  height: 45px; // Reduced height for a more compact button
  font-weight: 500;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  
  &:hover {
    background-color: #f6f7f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // Added shadow on hover for feedback
  }
`;

export const Settings = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px; // Reduced gap slightly for tighter spacing
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const SettingsGroup = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: 15px; // Slightly increased gap for more separation
`;

export const Label = styled.label`
  font-weight: 500;
  color: ${Colors.darkGrey}; // Added color for better readability
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
`;

export const EntropyContainer = styled.div`
  color: ${Colors.secondary};
  font-size: 0.9em;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  position: absolute;
  right: 0;
  bottom: -30px; // Adjusted positioning to fit better
`;

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
`;
