import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função para verificar as credenciais
  const verifyCredentials = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('@username');
      const storedPassword = await AsyncStorage.getItem('@password');

      if (storedUsername && storedPassword) {
        if (username === storedUsername && password === storedPassword) {
          Alert.alert('Login bem-sucedido!', `Bem-vindo, ${username}`);
          navigation.replace('Home');  // Navegar para a tela principal
        } else {
          Alert.alert('Credenciais incorretas.');
        }
      } else {
        Alert.alert('Nenhuma credencial encontrada. Faça o registro primeiro.');
      }
    } catch (error) {
      console.error('Erro ao verificar as credenciais', error);
      Alert.alert('Erro ao verificar as credenciais');
    }
  };

  // Função de login
  const handleLogin = () => {
    if (username && password) {
      verifyCredentials();
    } else {
      Alert.alert('Por favor, preencha todos os campos.');
    }
  };

  // Função para registrar novas credenciais
  const handleRegister = () => {
    if (username && password) {
      AsyncStorage.setItem('@username', username);
      AsyncStorage.setItem('@password', password);
      Alert.alert('Credenciais registradas com sucesso!');
    } else {
      Alert.alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
