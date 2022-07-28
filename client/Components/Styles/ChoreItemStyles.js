import { StyleSheet } from 'react-native';
import globalStyles from '../../Config/Styling';

const styles = StyleSheet.create({
  choreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: globalStyles.backgroundLightOrange,
  },
  choreDetailsWrapper: {},
  icon: { flexGrow: 1, marginHorizontal: 3 },
  text: { flexGrow: 4 },
});

export { styles };
