import { StyleSheet } from 'react-native';
import GlobalStylingVariables from '../../Utils/GlobalStylingVariables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: GlobalStylingVariables.paddingTopScreen,
    paddingBottom: GlobalStylingVariables.paddingNavBar,
  },
  modal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignSelf: 'center',
  },
  scrollContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: globalStyles.borderDark,
    borderRadius: 8,
    flexGrow: 0,
  },
});

export { styles };
