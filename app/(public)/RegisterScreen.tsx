import React, { useState } from 'react';
import { View, TextInput, Text, Alert, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-ui-lib';
import { globalStyles } from '../theme/styles'; // Importe o estilo global
import { validateEmail, validatePasswords } from '../uteis/validation'; // Importe as funções de validação
import { registerUser } from '../controllers/authController';
import { useRouter } from 'expo-router';


export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [loadingData, setLoadingData] = useState(false);
  const handleRegister = async () => {
    try {
      setLoadingData(true);
      const response = await registerUser(name, email, password);
      console.log(response)
      router.replace('/(public)/ConfirmRegisterScreen');
      setLoadingData(false);
    } catch (err: any) {
      setError(err.message);
      setLoadingData(false);
    }
  };

  const [loadingId, setLoadingId] = useState({});
  
  return (
    <ScrollView>
    <View style={globalStyles.container}>
     
      <Text style={globalStyles.title}>Registrar User</Text>
      <Image 
        source={require('../../assets/images/crypto_image.png')} 
        style={globalStyles.image}
        resizeMode="contain"
      />
      <View style={globalStyles.formContainer}>
        <TextInput
          style={globalStyles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
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
        <TextInput
          style={globalStyles.input}
          placeholder="Confirme a Senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        
        {!loadingData && <Button
          label="Registrar"
          onPress={handleRegister}
          style={globalStyles.formButton}
        />}
        {loadingData && <span>Loading...</span>}
      </View>
      
    </View>
    </ScrollView>
  );
}