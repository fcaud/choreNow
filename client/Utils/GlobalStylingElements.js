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
  h1: {
    fontSize: 28,
    fontFamily: 'Nunito_400Regular',
    color: GlobalStyling.textOrange,
  },
  h2: {
    fontSize: 20,
    fontFamily: 'Nunito_400Regular',
    color: GlobalStyling.textDark,
  },
  pButton: {
    fontSize: 18,
    fontFamily: 'Nunito_400Regular',
    color: GlobalStyling.textOrange,
  },
  pGreyed: {
    fontSize: 14,
    fontFamily: 'Nunito_400Regular',
    color: GlobalStyling.textGrey,
  },
});

export { globalElements };
