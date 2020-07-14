import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

import logo from '../../assets/logo.png';

export default function mainPage() {
  const [number, setNumber] = useState('?');

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.textWelcome}>Seja Bem-vindo!</Text>
        <Image source={logo} />
      </View>

      <Text style={styles.textNumberSort}>Número:</Text>

      <View style={styles.viewSortNumber}>
        <Text style={styles.numberSort}>{number}</Text>
      </View>

      <View style={styles.viewButton}>
        <TouchableOpacity
          onPress={() => setNumber(Math.floor(Math.random() * 10 + 0))}
          style={styles.buttonSort}>
          <Text style={styles.textButtonSort}>Sortear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
