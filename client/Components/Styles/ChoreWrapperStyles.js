import { StyleSheet } from 'react-native';
import globalStyles from '../../Utils/GlobalStyling';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: globalStyles.border,
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: globalStyles.backgroundBoldOrange,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: globalStyles.buttonWhite,
    borderRadius: 15,
    width: 20,
    height: 20,
    justifyContent: 'center',
    marginHorizontal: 3,
  },
  text: { color: globalStyles.textLight, marginRight: '2%' },
  subText: { fontSize: 10, fontStyle: 'italic' },
  icon: { textAlign: 'center' },
  completed: { textDecorationLine: 'line-through' },
});

export { styles };
