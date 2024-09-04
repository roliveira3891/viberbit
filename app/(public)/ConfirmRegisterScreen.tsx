import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../theme/styles';
import { Button } from 'react-native-ui-lib';
import { router, useRouter } from "expo-router";

export default function ConfirmacaoEmail() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Quase lá!</Text>
      <Text style={globalStyles.description}>
        Um email de confirmação foi enviado para o seu endereço de email.
        Por favor, verifique sua caixa de entrada para confirmar o seu email.
      </Text>
      
      <Text style={globalStyles.description}>
        Caso não tenha recebido, verifique também sua caixa de spam ou lixeira.
      </Text>

      <Button
        label="Abrir Email"
        onPress={() => {
          // Aqui você pode implementar uma lógica para abrir o app de email ou simplesmente orientar o usuário
        }}
        style={globalStyles.formButton}
      />

      <Button
        label="Voltar ao Início"
        onPress={() => router.navigate('/(public)/WelcomeScreen')}
        style={globalStyles.formButton}
      />
    </View>
  );
}