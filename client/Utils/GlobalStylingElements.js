import { StyleSheet } from 'react-native';
import GlobalStyling from './GlobalStylingVariables';

const globalElements = StyleSheet.create({
  p: { fontSize: 18, fontFamily: 'Nunito_400Regular' },
  button: {
    backgroundColor: GlobalStyling.backgroundWhite,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    margin: 5,
  },
  h1: {},
  h2: {},
  buttonP: {
    fontSize: 18,
    fontFamily: 'Nunito_400Regular',
    color: GlobalStyling.textOrange,
  },
});

export { globalElements };
