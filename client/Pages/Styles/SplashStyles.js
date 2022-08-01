import { StyleSheet } from 'react-native';
import GlobalStyling from '../../Utils/GlobalStyling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyling.backgroundBoldOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    transform: [{ scaleY: 1.3 }, { translateY: 15 }],
  },
});

export { styles };
