import { SafeAreaView } from 'react-native';
import { router, useRouter } from "expo-router";
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-ui-lib';
import { globalStyles } from '../theme/styles'; // Importe o estilo global
import LoginScreen from './LoginScreen';


export default function WelcomeScreen({ }) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title} >Bem-vindo ao CryptoApp</Text>
        
        <Image 
          source={require('../../assets/images/crypto_image.png')} 
          style={globalStyles.image}
          resizeMode="contain"
        />
        
        <View style={globalStyles.buttonContainer}>
          <Button
            label="Login"
            onPress={() => router.navigate('/(public)/LoginScreen') }
            style={globalStyles.button}
          />
          <Button
            label="Registrar"
            onPress={() => router.navigate('/(public)/RegisterScreen')}
            style={globalStyles.button}
          />
        </View>
      </View>
    );
  }