import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  innerContainer: { flexDirection: 'row' },
  indicator: { backgroundColor: 'red', width: 10, height: 10, borderRadius: 5 },
  freqWrapper: { flexDirection: 'row' },
  desiredFreqWrapper: {
    backgroundColor: 'red',
    width: 15,
    height: 15,
    borderRadius: 10,
  },
});

export { styles };
