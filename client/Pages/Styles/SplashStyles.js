import { StyleSheet } from 'react-native';
import GlobalStyling from '../../Utils/GlobalStylingVariables';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyling.backgroundBoldOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    position: 'absolute',
    bottom: 0,
    transform: [
      { scaleY: windowHeight * 0.0019 },
      { translateY: windowHeight * 0.04 },
    ],
    zIndex: 1,
  },
  loginButton: { marginVertical: 25, zIndex: 3 },
});

export { styles };
