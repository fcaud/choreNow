import { StyleSheet } from 'react-native';
import globalStyles from '../../Utils/GlobalStylingVariables';

const styles = StyleSheet.create({
  roomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: globalStyles.backgroundBoldOrange,
    borderColor: globalStyles.borderDark,
    borderBottomWidth: 1,
  },
  icon: {
    flexGrow: 1,
    marginHorizontal: 4,
    color: globalStyles.textLight,
    fontSize: 23,
  },
  text: { flexGrow: 4, marginLeft: 15, marginVertical: 7, fontSize: 21 },
  button: { marginVertical: 4 },
});

export { styles };
