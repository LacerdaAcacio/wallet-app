import styled, { css } from 'styled-components/native';
import { Text } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const FormRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${wp('90%')}px;
`;

export const HalfWidthInputContainer = styled.View`
  width: ${wp('43%')}px;
`;
export const sharedInputStyle = ({ theme }: { theme: any }) => css`
  flex: 1;
  height: 100%;
  font-size: ${theme.fontSizes.body};
  color: ${theme.colors.black};
  margin-left: ${wp('2%')}px;
`;

export const FormRowErrorContainer = styled.View`
  width: ${wp('90%')}px;
  align-items: flex-start;
  margin-top: -${hp('1%')}px;
  min-height: ${hp('3%')}px;
`;

export const RowErrorText = styled(Text)`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
