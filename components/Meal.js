import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Meal = ({ title }) => (
  <View testID='meal' style={styles.item}>
    <Text key={title} style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    margin: 2
  },
  title: {
    
  }
});


export default Meal;