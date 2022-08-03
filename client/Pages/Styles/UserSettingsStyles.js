import { StyleSheet } from 'react-native';
import GlobalStylingVariables from '../../Utils/GlobalStylingVariables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: GlobalStylingVariables.paddingTopScreen,
    paddingBottom: GlobalStylingVariables.paddingNavBar,
  },
});

export { styles };
