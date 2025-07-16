import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const ScreenWrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const FormScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
})``;

export const HeaderContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const FormContainer = styled.View`
  align-items: center;
  width: 100%;
`;

export const FormRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${wp('90%')}px;
`;

export const HalfWidthInputContainer = styled.View`
  width: ${wp('43%')}px;
`;
