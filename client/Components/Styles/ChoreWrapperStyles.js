import { StyleSheet } from 'react-native';
import globalStyles from '../../Utils/GlobalStylingVariables';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: globalStyles.backgroundBoldOrange,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 3,
    justifyContent: 'space-between',
    width: '100%',
  },
  subText: { fontSize: 14, fontStyle: 'italic' },
  completed: { textDecorationLine: 'line-through' },
  detailsWrapper: {
    borderWidth: 1,
    borderColor: globalStyles.border,
    borderRadius: 8,
  },
  buttonWrapper: { flexDirection: 'row', paddingVertical: 7 },
});

export { styles };
