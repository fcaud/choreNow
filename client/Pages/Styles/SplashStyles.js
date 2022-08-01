import { StyleSheet } from 'react-native';
import GlobalStyling from '../../Utils/GlobalStylingVariables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyling.backgroundBoldOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    transform: [{ scaleY: 1.3 }, { translateY: 15 }],
    zIndex: 1,
  },
  loginButton: { marginVertical: 25, zIndex: 3 },
});

export { styles };
