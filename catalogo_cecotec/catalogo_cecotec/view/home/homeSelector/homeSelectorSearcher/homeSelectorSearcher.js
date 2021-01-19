/**
 * @file homeSelectorSearcher.js
 *
 * @description: Shows the searcher and params button
 *
 *  @todo params button is not implemented yet. Searcher handler is not implemented yet
 */

import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

//ICONS
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const HomeSelectorSearcher = () => {
  const theme = useTheme();

  //INLINE STYLES
  const textInputContainerInline = {
    // backgroundColor: theme.colors.notification,
    width: Dimensions.get('window').width / 1.25,
    height: Dimensions.get('window').height / 15,
  };
  const textInputInline = {
    width: Dimensions.get('window').width / 1.4,
    height: Dimensions.get('window').height / 15,
    color: theme.colors.text,
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/*SEARCH BAR ELEMENT  */}
        <View style={[styles.textInputContainer, textInputContainerInline]}>
          <EvilIcons
            name={'search'}
            size={25}
            color={theme.colors.notification}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder={'Buscar'}
            style={[styles.textInput, textInputInline]}
            placeholderTextColor={theme.colors.notification}
          />
        </View>
        {/*BUTTON ELEMENT */}
        <TouchableOpacity style={styles.button}>
          <Ionicons
            name={'ios-options-outline'}
            size={30}
            color={theme.colors.text}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textInputContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  searchIcon: {
    alignSelf: 'center',
    marginLeft: 20,
  },
  textInput: {
    borderRadius: 10,
    marginLeft: 20,
  },
  //BUTTON STYLE
  button: {
    width: Dimensions.get('window').width / 8,
    height: Dimensions.get('window').height / 18,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
});

export default HomeSelectorSearcher;
