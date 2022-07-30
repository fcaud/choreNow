import { StyleSheet } from 'react-native';
import globalStyles from '../../Utils/GlobalStyling';

const styles = StyleSheet.create({
  choreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: globalStyles.backgroundLightOrange,
  },
  choreDetailsWrapper: {},
  icon: { flexGrow: 1, marginHorizontal: 3 },
  text: { flexGrow: 4 },
  completed: { textDecorationLine: 'line-through' },
});

export { styles };
