import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as S from './styles';
import { useTheme } from 'styled-components/native';

interface HeaderProps {
  title?: string;
  variant?: 'default' | 'wallet';
  rightComponent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, variant = 'default', rightComponent }) => {
  const navigation = useNavigation();
  const { colors, fontSizes } = useTheme();
  const floatFontSize = parseFloat(fontSizes.h1);
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <S.Container>
      <S.TopSection variant={variant}>
        <S.BackButton onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={floatFontSize} color={colors.primaryButton} />
        </S.BackButton>
        <S.HeaderTitle variant={variant}>{title ?? ''}</S.HeaderTitle>
        {rightComponent ?? <S.HeaderPlaceholder />}
      </S.TopSection>

      {variant === 'wallet' && (
        <S.SubHeaderSection>
          <S.SubHeaderTitle>Meus Cartões</S.SubHeaderTitle>
        </S.SubHeaderSection>
      )}
    </S.Container>
  );
};

export default Header;
