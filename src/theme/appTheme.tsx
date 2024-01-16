import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  pokeballBG: {
    position: 'absolute',
    width: '100%',
    height: 200,
    top: 14,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 32,
  },
  subtitle: {
    fontSize: 16,
    color: '#747476',
    marginTop: 8,
  },
  filterSize: {
    width: 25,
    height: 25,
  },
  filtersContainer: {
    flexDirection: 'row',
    right: 20,
    top: 100,
  },
  textInputContainer: {
    backgroundColor: '#F2F2F2',
    padding: 16,
    borderRadius: 10,
    marginTop: 16,
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: 'black',
    fontSize: 16,
    marginLeft: 8,
  },
});
