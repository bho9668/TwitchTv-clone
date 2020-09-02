import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  padding-right: 14px;
`;

export const Avatar = styled.TouchableOpacity`
  background: ${colors.tag};
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const OnLineStatus = styled.View`
  background: ${colors.green};
  width: 10px;
  height: 10px;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  right: 0;
  border: 1px solid ${colors.green};
`;

export const RightButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 20px;
`;
