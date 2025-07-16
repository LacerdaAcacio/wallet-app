import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

/**
 * @description Renderiza o ícone da carteira a partir do código SVG.
 * @param {number} width - Largura do ícone.
 * @param {number} height - Altura do ícone.
 * @param {string} color - Cor do ícone. Se não for fornecida, usa a cor do tema.
 */
export const WalletSvgIcon = ({ width = 70, height = 70, color }: Props) => {
  // Hook para acessar o tema e usar a cor primária como padrão
  const theme = useTheme();
  const iconColor = color || theme.colors.primaryButton;

  return (
    <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
      <Path
        d="M69.4444 75H30.5556C29.0821 75 27.6691 74.4147 26.6272 73.3728C25.5853 72.3309 25 70.9179 25 69.4444V30.5556C25 29.0821 25.5853 27.6691 26.6272 26.6272C27.6691 25.5853 29.0821 25 30.5556 25H69.4444C70.9179 25 72.3309 25.5853 73.3728 26.6272C74.4147 27.6691 75 29.0821 75 30.5556V69.4444C75 70.9179 74.4147 72.3309 73.3728 73.3728C72.3309 74.4147 70.9179 75 69.4444 75Z"
        stroke={iconColor}
        strokeWidth="1.5"
      />
      <Path
        d="M25 58.3333H42.7778C43.6972 58.3333 44.4583 59.1056 44.8611 59.9333C45.4333 61.1083 46.7889 62.5 50 62.5C53.2111 62.5 54.5667 61.1111 55.1389 59.9333C55.5417 59.1056 56.3028 58.3333 57.2222 58.3333H75M25 36.1111H75M25 47.2222H75"
        stroke={iconColor}
        strokeWidth="1.5"
      />
    </Svg>
  );
};
