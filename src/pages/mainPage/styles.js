import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: wp('7%'),
    paddingTop: hp('3%'),
  },
  menu: {
    height: hp('10%'),

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textWelcome: {
    fontSize: wp('6.9%'),
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  informNumber: {
    marginTop: hp('2%'),

    fontSize: wp('5%'),
    fontWeight: '700',
  },
  numbersInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInputNumbers: {
    paddingTop: hp('1%'),

    fontSize: wp('4.5%'),
    fontWeight: 'bold',
  },
  viewSortNumber: {
    alignItems: 'center',
    justifyContent: 'center',

    width: wp('86%'),
    height: hp('43%'),

    marginBottom: hp('3%'),
    marginTop: hp('4%'),

    borderWidth: wp('3%'),
    borderRadius: wp('43%'),
    borderColor: '#7264ab',
  },
  numberSort: {
    fontSize: wp('30%'),
    fontWeight: 'bold',
  },
  textNumberSort: {
    marginTop: hp('2.5%'),

    fontSize: wp('8%'),
    fontWeight: 'bold',
  },
  viewButton: {
    alignItems: 'center',
  },
  buttonSort: {
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: hp('2%'),

    backgroundColor: '#7264ab',

    height: hp('10%'),
    width: wp('86%'),
    borderRadius: 4,
  },
  textButtonSort: {
    fontSize: wp('6.5%'),
    fontWeight: '700',
  },
});
