import { StyleSheet } from 'react-native';
import globalStyles from '../../Utils/GlobalStylingVariables';

const styles = StyleSheet.create({
  container: {},
  inputRow: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 4,
    marginHorizontal: 10,
  },
  input: {
    flexGrow: 5,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 0,
    paddingRight: 0,
  },
  icon: { color: globalStyles.textLight, fontSize: 16 },
});
export { styles };
