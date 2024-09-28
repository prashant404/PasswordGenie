import styled from 'styled-components';
import Colors from '../../helpers/Colors';

export const Wrapper = styled.div`
  position: relative; /* Changed to relative for better positioning */
  max-width: 400px; /* Reduced width */
  width: 100%;
  margin: 40px auto; /* Centered with margin */
  padding: 20px; /* Reduced padding */
  background-color: white;
  border-radius: 15px; /* Slightly rounded corners */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 40px; /* Softer shadow */
  transition: box-shadow 0.3s ease-in-out; /* Smooth transition on hover */

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 60px; /* Enhanced shadow on hover */
  }

  @media (max-width: 720px) {
    background-color: #fbfcfe;
    box-shadow: none;
    padding: 15px; /* Adjust padding for smaller screens */
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px; /* Reduced gap for better alignment */
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 22px; /* Adjusted font size */
  font-weight: bold; /* Bold text for emphasis */
  color: ${Colors.primary}; /* Updated to a primary color */
`;

export const SubHeading = styled.h3`
  font-size: 16px; /* Adjusted font size */
  color: #7d7f81; /* Subtle color for contrast */
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
  text-decoration: underline; /* Added underline for better visibility */
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${Colors.hover}; /* Change color on hover */
  }
`;

export const ContainerFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px; /* Adjusted gap */
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
  height: 45px; /* Reduced height */
  color: black; /* Ensure text is white for contrast */
  border: none; /* Removed border */
  font-size: 1em;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  background-color: ${Colors.primary}; /* Primary color for the button */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  &:hover {
    background-color: ${Colors.hover}; /* Change color on hover */
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px;
  }
`;

export const GoogleImg = styled.img`
  width: 20px; /* Adjusted width */
  height: 20px; /* Adjusted height */
`;

export const ErrorMsg = styled.span`
  font-size: 0.8em;
  color: red;
  margin-right: auto;
  margin-top: -10px; /* Adjusted margin */
  text-align: left; /* Align text to the left */
`;

// Adjust the Lottie component's width and height in your component file as well
