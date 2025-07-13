import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const theme = {
  colors: {
    backgroundDark: '#142995',
    primaryButton: '#12C2E9',
    secondaryButton: '#A5FF32',
    white: '#FFFFFF',
    lightGray: '#EEEEEE',
    placeholder: '#BBBBBB',
    textOnPrimary: '#FFFFFF',
    textOnSecondary: '#142995',
    black: '#111111',
    error: '#ff6b6b',
  },
  fonts: {
    caption: 'PT Sans Caption',
    body: 'PT Sans',
  },
  fontSizes: {
    h1: wp('7%'),
    h3: wp('5.5%'),
    h4: wp('5%'),
    h5: wp('4.5%'),
    body: wp('4%'),
    small: wp('3.5%'),
  },
  spacing: {
    small: hp('1%'),
    medium: hp('2%'),
    large: hp('3%'),
  },
  radii: {
    small: '6px',
    medium: '12px',
    large: '16px',
  },
};
