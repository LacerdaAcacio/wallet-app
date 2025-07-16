import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const ListWrapper = styled.View`
  width: 100%;
  flex: 1;
`;

export const ActionText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.body}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const BottomButtonContainer = styled.View`
  width: 100%;
  padding-vertical: ${hp('3%')}px;
  align-items: center;
`;

export const OverlayContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;
