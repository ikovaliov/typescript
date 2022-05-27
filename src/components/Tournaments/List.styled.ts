import styled from 'styled-components';
import theme from '../../theme';

export const StyledListActionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledMessageDiv = styled.div`
  text-align: center;
  margin: 24px;
`;

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  justify-content: space-between;
  margin-top: 24px;
`;

export const StyledTournamentDiv = styled.div`
  border-radius: 4px;
  padding: 24px;
  background-color: ${theme.palette.background.base};

  p {
    margin: 0;
  }
`;

export const StyledTournamentButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;
