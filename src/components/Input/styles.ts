import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const InputContainer = styled.View`
  width: ${wp('90%')}px;
  margin-bottom: ${hp('2%')}px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${wp('4%')}px;
  margin-bottom: ${hp('1%')}px;
`;

export const TextInputStyled = styled.TextInput`
  flex: 1;
  height: 100%;
  font-size: ${wp('4%')}px;
  color: ${({ theme }) => theme.colors.black};
  margin-left: ${wp('2%')}px;
`;

export const TextInputContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.small};
  height: ${hp('6.5%')}px;
  padding-horizontal: ${wp('4%')}px;
  flex-direction: row;
  align-items: center;

  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.15;
  shadow-radius: 4px;
  elevation: 3;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${wp('3.5%')}px;
  margin-top: ${hp('0.5%')}px;
  margin-left: ${wp('1%')}px;
`;
