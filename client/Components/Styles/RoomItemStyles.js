import { StyleSheet } from 'react-native';
import globalStyles from '../../Config/Styling';

const styles = StyleSheet.create({
  roomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: globalStyles.backgroundBoldOrange,
  },
  icon: { flexGrow: 1, marginHorizontal: 3 },
  text: { flexGrow: 4 },
});

export { styles };
