import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type DummyScreenProps = {};

const DummyScreen: React.FC<DummyScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>DummyScreen</Text>
    </View>
  );
};

export default DummyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
