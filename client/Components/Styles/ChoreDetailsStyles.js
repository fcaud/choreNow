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
  indicatorText: {
    textAlign: 'center',
    paddingVertical: 1,
    fontFamily: 'Nunito_400Regular',
    color: globalStyles.textDark,
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
  high: {
    backgroundColor: globalStyles.red,
  },
  medium: { backgroundColor: globalStyles.amber },
  low: { backgroundColor: globalStyles.green },
  freqContainer: {
    justifyContent: 'center',
    paddingTop: 10,
  },
  freqWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 3,
    paddingLeft: 3,
    borderRadius: 15,
    // backgroundColor: globalStyles.backgroundDarkGrey,
    width: 39,
  },
  minMaxFreqWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontSize: 14, fontFamily: 'Nunito_400Regular' },
  textCenter: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Nunito_400Regular',
  },
  timeWrapper: { paddingTop: 10 },
  notesWrapper: { paddingLeft: 8 },
  subFreq: {
    textAlign: 'center',
    marginVertical: -3,
    paddingVertical: 0,
    marginRight: 4,
    fontSize: 13,
    fontFamily: 'Nunito_700Bold',
  },
});

export { styles };
