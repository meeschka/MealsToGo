import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';

const App = function () {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.greenView}>
          <Text>search</Text>
        </View>
        <View style={styles.blueView}>
          <Text>search</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  greenView: {
    backgroundColor: 'green',
    padding: 16,
    marginTop: 30,
  },
  blueView: {
    backgroundColor: 'blue',
    padding: 16,
    flex: 1,
  },
});

export default App;
