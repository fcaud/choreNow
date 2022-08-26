import { StyleSheet } from 'react-native';
import globalStyles from '../../Utils/GlobalStylingVariables';

const styles = StyleSheet.create({
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
    marginLeft: 5,
  },
  freqContainer: { width: '100%' },
  freqTitle: {
    backgroundColor: globalStyles.backgroundWhite,
    marginTop: -18,
    paddingLeft: 5,
    width: 85,
  },
});
export { styles };
