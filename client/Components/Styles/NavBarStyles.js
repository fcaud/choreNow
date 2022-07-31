import { StyleSheet } from 'react-native';
import globalStyles from '../../Utils/GlobalStyling';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: globalStyles.backgroundWhite,
    // shadowColor: globalStyles.border,
    // shadowOffset: { width: 0, height: -5 },
    // shadowRadius: 5,
    // shadowOpacity: 0.5,
  },
  touchable: {
    margin: 10,
  },
  icon: {
    fontSize: 20,
  },
});

export { styles };
