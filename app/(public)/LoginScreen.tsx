import React, { useState } from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import { Button } from 'react-native-ui-lib';
import { globalStyles } from '../theme/styles'; // Importe o estilo global
import { loginUser } from '../controllers/authController'

export default function LoginScreen({ }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingData, setLoadingData] = useState(false);
  async function handleLogin() {
    setLoadingData(true);
    const response = await loginUser(email, password);
    setLoadingData(false);
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Login</Text>
      <Image
        source={require('../../assets/images/crypto_image.png')}
        style={globalStyles.image}
        resizeMode="contain"
      />
      <View style={globalStyles.formContainer}>
        <TextInput
          style={globalStyles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {!loadingData && <Button
          label="Entrar"
          onPress={handleLogin}
          style={globalStyles.formButton}
        />}
        {loadingData && <span>Loading...</span>}
      </View>
    </View>
  );
}