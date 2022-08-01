import { StyleSheet } from 'react-native';
import globalStyles from '../../Utils/GlobalStylingVariables';

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    marginVertical: 4,
    marginHorizontal: 10,
  },
  input: {
    flexGrow: 5,
    borderColor: globalStyles.border,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  button: {
    flexGrow: 1,
    marginHorizontal: 5,
    borderRadius: 15,
    justifyContent: 'center',
  },
});
export { styles };
