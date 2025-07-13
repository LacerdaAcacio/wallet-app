import styled from 'styled-components/native';
import MainTitleComponent from '../../components/MainTitle';

export const SuccessContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
`;

export const SuccessMessage = styled(MainTitleComponent)`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  margin-bottom: 20px;
`;

export const CardPreview = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 20px;
  border-radius: ${({ theme }) => theme.radii.large};
  width: 100%;
  margin-vertical: 30px;
  align-items: center;
`;

export const CardText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.body};
  margin-bottom: 10px;
`;
