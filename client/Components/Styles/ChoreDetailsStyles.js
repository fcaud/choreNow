import { StyleSheet } from 'react-native';
import globalStyles from '../../Config/Styling';

const styles = StyleSheet.create({
  container: {},
  innerContainer: { flexDirection: 'row' },
  indicator: {
    backgroundColor: globalStyles.red,
    width: 15,
    height: 15,
    borderRadius: 10,
    marginHorizontal: 3,
  },
  freqWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 3,
    paddingHorizontal: 3,
  },
  desiredFreqWrapper: {
    backgroundColor: globalStyles.backgroundDarkGrey,
    width: 17,
    height: 17,
    borderRadius: 12,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: { textAlign: 'center' },
});

export { styles };
