import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppTheme } from './types';

export const theme: AppTheme = {
  colors: {
    primary: '#12C2E9',
    secondary: '#A5FF32',
    background: '#142995',
    white: '#FFFFFF',
    black: '#111111',
    error: '#ff6b6b',
    text: {
      onPrimary: '#FFFFFF',
      onSecondary: '#142995',
      default: '#111111',
    },
    ui: {
      lightGray: '#EEEEEE',
    },
    text: {
      onPrimary: '#FFFFFF',
      onSecondary: '#142995',
      default: '#111111',
      placeholder: '#BBBBBB',
    },
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
    extraLarge: '30px',
  },
};
