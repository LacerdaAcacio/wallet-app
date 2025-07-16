import styled from 'styled-components/native';
import { MainTitle as MainTitleComponent } from '@/components';

export const SuccessContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: ${({ theme }) => theme.spacing.medium}px;
`;

export const AppTitle = styled(MainTitleComponent)`
  margin-bottom: ${({ theme }) => theme.spacing.small}px;
`;

export const SuccessMessage = styled(MainTitleComponent)`
  font-size: ${({ theme }) => theme.fontSizes.h4}px;
  margin-bottom: ${({ theme }) => theme.spacing.medium}px;
`;

export const CardPreview = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.spacing.medium}px;
  border-radius: ${({ theme }) => theme.radii.large};
  width: 100%;
  margin-vertical: ${({ theme }) => theme.spacing.large}px;
  align-items: center;
`;

export const CardText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.body}px;
  margin-bottom: ${({ theme }) => theme.spacing.small}px;
`;
