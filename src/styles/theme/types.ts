export interface AppTheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    white: string;
    black: string;
    error: string;
    text: {
      onPrimary: string;
      onSecondary: string;
      default: string;
      placeholder: string;
    };
    ui: {
      lightGray: string;
    };
  };
  fonts: {
    caption: string;
    body: string;
  };
  fontSizes: {
    h1: number;
    h3: number;
    h4: number;
    h5: number;
    body: number;
    small: number;
  };
  spacing: {
    small: number;
    medium: number;
    large: number;
  };
  radii: {
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  };
}
