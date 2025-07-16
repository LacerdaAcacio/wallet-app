import React from 'react';
import { Platform, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { ScreenContainer, Header, MainTitle, Button } from '@/components';
import { ControlledInput } from '@/components/ControlledInput';
import { useAddCardForm } from '@/features/cards/hooks/useAddCardForm';
import * as S from './styles';
import { useTheme } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const CameraIcon = () => {
  const theme = useTheme();
  const handleCameraPress = () => {
    Alert.alert('Funcionalidade Futura', 'A digitalização de cartões será implementada em breve.');
  };

  return (
    <TouchableOpacity onPress={handleCameraPress}>
      <Ionicons name="camera" size={24} color={theme.colors.primary} />
    </TouchableOpacity>
  );
};

const AddCardScreen: React.FC = () => {
  const { control, isValid, isSubmitting, submitForm } = useAddCardForm();
  const backgroundImage = require('@/assets/background.png');

  return (
    <ScreenContainer backgroundImage={backgroundImage}>
      <S.HeaderContainer>
        <Header title="cadastro" />
      </S.HeaderContainer>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, width: '100%' }}
      >
        <S.FormScrollView>
          <S.FormContainer>
            <MainTitle style={{ marginBottom: 20 }}>Wallet Test</MainTitle>

            <ControlledInput
              control={control}
              name="number"
              label="número do cartão"
              mask="9999 9999 9999 9999"
              placeholder="0000 0000 0000 0000"
              keyboardType="numeric"
              icon={<CameraIcon />}
            />
            <ControlledInput
              control={control}
              name="name"
              label="nome do titular do cartão"
              placeholder="Seu nome completo"
            />
            <S.FormRow>
              <S.HalfWidthInputContainer>
                <ControlledInput
                  control={control}
                  name="expiry"
                  label="vencimento"
                  mask="99/99"
                  placeholder="MM/AA"
                  keyboardType="numeric"
                />
              </S.HalfWidthInputContainer>
              <S.HalfWidthInputContainer>
                <ControlledInput
                  control={control}
                  name="cvv"
                  label="código de segurança"
                  placeholder="***"
                  keyboardType="numeric"
                  secureTextEntry
                  maxLength={4}
                />
              </S.HalfWidthInputContainer>
            </S.FormRow>
            <Button
              title="avançar"
              onPress={submitForm}
              disabled={!isValid || isSubmitting}
              style={{ opacity: !isValid || isSubmitting ? 0.5 : 1.0 }}
            />
          </S.FormContainer>
        </S.FormScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default AddCardScreen;
