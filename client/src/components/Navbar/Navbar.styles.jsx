import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Colors from '../../helpers/Colors';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  font-size: 1em; // Set a base font size
  padding: 10px 15px; // Add some padding for better clickability
  border-radius: 5px; // Rounded corners for a modern look

  &.active {
    color: ${Colors.default}; // Active link color
    font-weight: bold; // Make active link stand out
    background-color: rgba(12, 119, 177, 0.1); // Subtle background for active state
  }

  &:hover {
    color: ${Colors.default}; // Hover color
    background-color: rgba(12, 119, 177, 0.1); // Subtle background on hover
  }
`;

export const Nav = styled.div`
  padding: 0 20px;
  border: 1px solid #dadce0;
  min-height: 70px;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: white; // Background for the nav
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Add shadow for depth
`;

export const Li = styled.li`
  text-align: center;
  font-size: 1em;
`;

export const UserDetails = styled.div`
  margin-right: auto;
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Ul = styled.ul`
  margin: auto;
  width: 100%;
  max-width: 1000px;
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end; // Use flex-end for right alignment
  height: 100%;
  list-style: none;
  padding: 0;
`;

export const Span = styled.span`
  font-size: 0.9em;
  @media (max-width: 720px) {
    display: none; // Hide on small screens
  }
`;

export const Icon = styled.i`
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1; // Full opacity on hover
  }
`;
