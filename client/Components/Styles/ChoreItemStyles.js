import { StyleSheet } from 'react-native';
import globalStyles from '../../Utils/GlobalStylingVariables';

const styles = StyleSheet.create({
  choreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: globalStyles.backgroundLightOrange,
    borderColor: globalStyles.borderDark,
    borderBottomWidth: 1,
  },
  choreDetailsWrapper: {
    borderColor: globalStyles.borderDark,
    borderBottomWidth: 1,
  },
  icon: { marginHorizontal: 7, fontSize: 17, color: globalStyles.textDarkGrey },
  text: {
    flexGrow: 4,
    marginVertical: 4,
    marginLeft: 20,
    color: globalStyles.textDarkGrey,
  },
  completed: { textDecorationLine: 'line-through' },
  iconWrapper: { marginRight: 8, alignSelf: 'center' },
});

export { styles };
