import { StyleSheet } from 'react-native';
import GlobalStyling from './GlobalStylingVariables';

const globalElements = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyling.backgroundWhite,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    margin: 5,
  },
  roundButton: {
    backgroundColor: globalStyles.buttonWhite,
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    marginHorizontal: 3,
  },
  buttonOrange: {
    backgroundColor: globalStyles.backgroundBoldOrange,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginVertical: 5,
    marginHorizontal: 3,
    alignSelf: 'center',
  },
  h1: {
    fontSize: 28,
    fontFamily: 'Nunito_600SemiBold',
    color: GlobalStyling.textOrange,
  },
  h2: {
    fontSize: 20,
    fontFamily: 'Nunito_600SemiBold',
    color: GlobalStyling.textDark,
  },
  h3: {
    fontSize: 18,
    fontFamily: 'Nunito_700Bold',
    color: GlobalStyling.textLight,
    marginLeft: 15,
    marginBottom: -4,
  },
  p: { fontSize: 18, fontFamily: 'Nunito_600SemiBold', marginLeft: '2%' },
  pButton: {
    fontSize: 18,
    fontFamily: 'Nunito_600SemiBold',
    color: GlobalStyling.textOrange,
  },
  pGreyed: {
    fontSize: 14,
    fontFamily: 'Nunito_600SemiBold',
    color: GlobalStyling.textGrey,
    marginLeft: '2%',
  },
  pWhite: {
    fontSize: 18,
    fontFamily: 'Nunito_600SemiBold',
    color: GlobalStyling.textLight,
  },
  icon: { textAlign: 'center', fontSize: 18 },
  iconGreyed: {
    color: GlobalStyling.textGrey,
    textAlign: 'center',
    fontSize: 18,
  },
  scrollView: { width: '75%' },
  borderedView: {
    borderWidth: 1,
    borderColor: globalStyles.border,
    borderRadius: 8,
    width: '75%',
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  timeInputWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: globalStyles.border,
    borderRadius: 15,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 5,
  },
  row: { flexDirection: 'row' },
  input: {
    borderColor: globalStyles.border,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 5,
    height: 30,
    fontSize: 15,
    fontFamily: 'Nunito_600SemiBold',
  },
});

export { globalElements };
