import { Dimensions } from 'react-native';
const Style = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  gridStyle: {
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#cacaca',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    elevation: 1,
    width: (Dimensions.get('window').width / 2.5),
    height: (Dimensions.get('window').width / 3),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  borderColor: {
    borderColor: '#bcbbbb'
  },
  positionCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradientColor: [
    '#864fa0',
    '#834fa1',
    '#8150a1',
    '#7f50a0',
    '#7d51a0',
    '#7d51a0',
    '#7f50a0',
    '#7d51a0',
    '#764fa0',
    '#764fa0',
    '#784ea0',
    '#784ea0',
    '#764fa0',
    '#744ea1',
    '#724fa1',
    '#724fa1',
    '#744ea1',
    '#6f50a0',
    '#6e4ea1',
    '#6c4fa1',
    '#6c4fa1',
    '#6e4ea1',
    '#6e4ea1',
    '#6c4fa1'

  ],
  mainHeadingContainer: {
    width: (Dimensions.get('window').width / 1.1),
    alignSelf: 'center',
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold'
  }

};
module.exports = Style;
