import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'; // IMPORTADO
import { UI } from './constants';
import * as S from './styles';
import { HeaderProps } from './types';

const HeaderComponent: React.FC<HeaderProps> = ({
  title,
  variant = 'default',
  rightComponent,
}) => {
  const navigation = useNavigation();
  const { colors, fontSizes } = useTheme();
  const insets = useSafeAreaInsets();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <S.Container paddingTop={insets.top}>
      <S.TopSection variant={variant}>
        <S.BackButton onPress={handleGoBack}>
          <Ionicons
            name={UI.BACK_ICON_NAME}
            size={fontSizes.h1}
            color={colors.primary}
          />
        </S.BackButton>
        <S.HeaderTitle variant={variant}>{title ?? ''}</S.HeaderTitle>
        {rightComponent ?? <S.HeaderPlaceholder />}
      </S.TopSection>

      {variant === 'wallet' && (
        <S.SubHeaderSection>
          <S.SubHeaderTitle>{UI.SUB_HEADER_TITLE}</S.SubHeaderTitle>
        </S.SubHeaderSection>
      )}
    </S.Container>
  );
};

export const Header = React.memo(HeaderComponent);
