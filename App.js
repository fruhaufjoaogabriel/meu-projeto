import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../meu-projeto/trabalho.jpg')} />
      <Text >Nome: Seventh Bank</Text>
      <Text>E-mail : Sevenbank7@gmail.com</Text>
      <Text>Sobre: A empresa foi criada para fabricar aplicativos para controle de dados em empresas.
            Foi criada no ano de 2018 por João Gabriel Frühauf, este que fez a empresa ficar conhecida
            nacionalmente e vende softwares para o Brasil inteiro.
        </Text>
      <Text>Contato: 9 9824 - 5140 </Text>
      <Button
        onPress={() => {
          alert('Você curtiu esta loja! Você acaba de ganhar um bônus');
        }}
        title="Curtir"
        color="#0b2b5e"

      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    margin: 20
  }
}); 
