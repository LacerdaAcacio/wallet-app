import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as S from './styles';
import { useTheme } from 'styled-components/native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();
  const { colors, fontSizes } = useTheme();

  const floatFontSize = parseFloat(fontSizes.h1);
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <S.HeaderContainer>
      <S.BackButton onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={floatFontSize} color={colors.primaryButton} />
      </S.BackButton>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <S.HeaderPlaceholder />
    </S.HeaderContainer>
  );
};

export default Header;
