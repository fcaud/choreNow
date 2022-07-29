import { StyleSheet } from 'react-native';
import globalStyles from '../../Config/Styling';

const styles = StyleSheet.create({
  container: { marginHorizontal: '3%', marginVertical: '3%' },
  innerContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  indicator: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginHorizontal: 3,
  },
  overdue: {
    backgroundColor: globalStyles.red,
  },
  due: {
    backgroundColor: globalStyles.amber,
  },
  nearlyDue: {
    backgroundColor: globalStyles.yellow,
  },
  notDue: {
    backgroundColor: globalStyles.green,
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
