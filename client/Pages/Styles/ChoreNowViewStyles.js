import { StyleSheet } from 'react-native';
import GlobalStyling from '../../Utils/GlobalStylingVariables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: GlobalStyling.paddingTopScreen,
    paddingBottom: GlobalStyling.paddingNavBar,
  },
});

export { styles };
