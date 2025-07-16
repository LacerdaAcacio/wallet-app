import 'styled-components/native';
import { AppTheme } from './theme/types';

declare module 'styled-components/native' {
  export interface DefaultTheme extends AppTheme {}
}
