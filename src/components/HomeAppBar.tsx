import React, { useContext } from 'react';
import { Image, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { CustomTheme } from '../../theme';
export const HomeAppBar = () => {
  const { top } = useSafeAreaInsets();
  const context = useContext(ThemeContext);

  if (context == null) {
    return <></>;
  }

  const { theme, isDarkMode, setIsDarkMode } = context;
  const styles = createStyles(theme, top);
  return (
    <View style={styles.appBarContainer}>
      <View style={styles.topFiltersContainer}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsDarkMode}
          value={isDarkMode}
        />
        <View
          style={styles.filtersContainer}>
          <TouchableOpacity>
            <Image
              source={require('../assets/homefilters/Generation.png')}
              style={styles.filterStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/homefilters/Sort.png')}
              style={styles.filterStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsDarkMode(true)}>
            <Image
              source={require('../assets/homefilters/Filter.png')}
              style={styles.filterStyle
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>
        Pokédex
      </Text>
      <Text style={styles.subtitle}>
        Search for Pokémon by name or using the National Pokédex number.
      </Text>

      <View
        style={styles.textInputContainer}>
        <Icon name="search" size={20} color="#747476" />
        <TextInput
          placeholder="What Pokémon are you looking for?"
          placeholderTextColor="#747476"
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

const createStyles = (theme: CustomTheme, top: number) =>
  StyleSheet.create({
    appBarContainer: {
      marginHorizontal: 20,
      top: top + 14
    },
    topFiltersContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    filtersContainer: {
      flexDirection: 'row',
      width: 110,
      justifyContent: 'space-between'
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginTop: 32,
      color: theme.titleTextColor,
    },
    subtitle: {
      fontSize: 16,
      color: theme.secondaryTextColor,
      marginTop: 8,
    },
    textInputContainer: {
      padding: 16,
      borderRadius: 10,
      marginTop: 16,
      marginBottom: 32,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.backgroundInput,
    },
    textInput: {
      flex: 1,
      fontSize: 16,
      marginLeft: 8,
      color: theme.titleTextColor,
    },
    filterStyle: {
      width: 25,
      height: 25,
      tintColor: theme.titleTextColor
    },
  });

