import { StyleSheet } from 'react-native';
import globalStyles from '../../Utils/GlobalStylingVariables';

const styles = StyleSheet.create({
  container: { marginHorizontal: '3%', paddingVertical: 8 },
  innerContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
    paddingVertical: 6,
  },
  indicator: {
    width: '47%',
    height: 18,
    borderRadius: 10,
    marginHorizontal: 3,
  },
  indicatorText: { textAlign: 'center', paddingVertical: 1 },
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
  high: {
    backgroundColor: globalStyles.red,
  },
  medium: { backgroundColor: globalStyles.amber },
  low: { backgroundColor: globalStyles.green },
  freqWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 3,
    paddingHorizontal: 3,
  },
  desiredFreqWrapper: {
    backgroundColor: globalStyles.backgroundDarkGrey,
    width: 20,
    height: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: { fontSize: 14 },
  textCenter: { textAlign: 'center', fontSize: 14 },
  timeWrapper: { paddingTop: 10 },
  notesWrapper: { paddingLeft: 8 },
  carets: {
    color: globalStyles.backgroundLightGrey,
    fontSize: 18,
    marginHorizontal: -8,
  },
  subFreq: { marginHorizontal: 8 },
});

export { styles };
