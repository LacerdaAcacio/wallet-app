import React from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cardSchema, CardFormData } from '../../utils/schemas/cardSchema';
import { MaskedTextInput } from 'react-native-mask-text';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { useCards } from '../../hooks/useCards';

import ScreenContainer from '../../components/ScreenContainer';
import Header from '../../components/Header';
import InputWrapper from '../../components/Input';
import Button from '../../components/Button';
import MainTitle from '../../components/MainTitle';
import {
  FormRow,
  FormRowErrorContainer,
  HalfWidthInputContainer,
  RowErrorText,
  sharedInputStyle,
} from './styles';

const StyledMaskedInput = styled(MaskedTextInput)`
  ${sharedInputStyle}
`;

const StyledTextInput = styled(TextInput)`
  ${sharedInputStyle}
`;

type AddCardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddCard'>;

const AddCardScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation<AddCardScreenNavigationProp>();
  const { addCard, isAddingCard } = useCards();

  const backgroundImage = require('../../assets/background.png');

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CardFormData>({
    resolver: zodResolver(cardSchema),
    mode: 'onChange',
    defaultValues: { name: '', number: '', expiry: '', cvv: '' },
  });

  const onSubmit = (data: CardFormData) => {
    addCard(data, {
      onSuccess: createdCard => {
        navigation.navigate('AddCardSuccess', { newCard: createdCard });
      },
    });
  };

  const handleCameraPress = () => {
    Alert.alert('Funcionalidade Futura', 'A digitalização de cartões será implementada em breve.');
  };

  return (
    <ScreenContainer backgroundImage={backgroundImage}>
      <Header title="cadastro" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, width: '100%', alignItems: 'center' }}
        // keyboardVerticalOffset={100}
        >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
          <MainTitle style={{ fontSize: theme.fontSizes.h3, marginBottom: 20 }}>
            Wallet Test
          </MainTitle>
          <Controller
            control={control}
            name="number"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputWrapper
                label="número do cartão"
                error={errors.number?.message}
                icon={
                  <TouchableOpacity onPress={handleCameraPress}>
                    <Ionicons name="camera" size={24} color={theme.colors.primaryButton} />
                  </TouchableOpacity>
                }>
                <StyledMaskedInput
                  mask="9999 9999 9999 9999"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                  placeholder="0000 0000 0000 0000"
                  placeholderTextColor={theme.colors.placeholder}
                />
              </InputWrapper>
            )}
          />
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputWrapper label="nome do titular do cartão" error={errors.name?.message}>
                <StyledTextInput
                  onBlur={onBlur}
                  onChangeText={text => onChange(text.replace(/[0-9]/g, ''))}
                  value={value}
                  placeholder="Seu nome completo"
                  placeholderTextColor={theme.colors.placeholder}
                />
              </InputWrapper>
            )}
          />
          <FormRow>
            <HalfWidthInputContainer>
              <Controller
                control={control}
                name="expiry"
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputWrapper label="vencimento">
                    <StyledMaskedInput
                      mask="99/99"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="MM/AA"
                      keyboardType="numeric"
                      placeholderTextColor={theme.colors.placeholder}
                    />
                  </InputWrapper>
                )}
              />
            </HalfWidthInputContainer>
            <HalfWidthInputContainer>
              <Controller
                control={control}
                name="cvv"
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputWrapper label="código de segurança">
                    <StyledTextInput
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="***"
                      keyboardType="numeric"
                      secureTextEntry
                      maxLength={4}
                      placeholderTextColor={theme.colors.placeholder}
                    />
                  </InputWrapper>
                )}
              />
            </HalfWidthInputContainer>
          </FormRow>
          <FormRowErrorContainer>
            <RowErrorText>{errors.expiry?.message || errors.cvv?.message}</RowErrorText>
          </FormRowErrorContainer>
          <View>
            <Button
              title="avançar"
              onPress={handleSubmit(onSubmit)}
              disabled={!isValid || isAddingCard}
              style={{ opacity: isValid && !isAddingCard ? 1 : 0.5 }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default AddCardScreen;
