import styled from 'styled-components';

// Modern form wrapper with increased padding and sleek design
export const FormWrapper = styled.form`
  height: fit-content;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 20px;
  padding: 20px;
  border-radius: 12px;
  background: #f4f4f4;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

// Modern button with gradient and hover effect
export const Button = styled.button`
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
  max-width: 400px;
  width: 100%;
  height: 45px;
  border: none;
  background: linear-gradient(135deg, #00aaff, #005f99);
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #005f99, #00aaff);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    color: #fff;
  }
`;

// Headline with larger, bolder text
export const Headline = styled.h4`
  font-size: 1.5em;
  margin: 0;
  margin-right: auto;
  font-weight: bold;
  color: #333;
`;

// Input field container with slight shadow and spacing updates
export const InputField = styled.div`
  width: 100%;
  position: relative;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

// Heading with stronger font size and color
export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.3em;
  font-weight: bold;
  color: #444;
`;

// Close modal with a smoother hover effect and transition
export const CloseModal = styled.i`
  cursor: pointer;
  opacity: 0.7;
  font-size: 1.2em;
  color: #777;
  transition: opacity 0.3s ease-in-out, transform 0.2s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;
