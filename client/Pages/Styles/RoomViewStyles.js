import { StyleSheet } from 'react-native';
import globalStyles from '../../Utils/GlobalStyling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: '10%',
  },
  modal: { flexDirection: 'row', justifyContent: 'space-between', padding: 20 },
});

export { styles };
