/**
 * @file infoView
 *
 * @description: Submodule that manage all the text data of a ProductItem. This sheet is required
 * in order to get a cleaner code.
 */
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';

//ICONS
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const InfoView = ({item, theme, WIDTH}) => {
  //INLINE STYLES
  const textInline = {
    color: theme.colors.text,
  };
  /**
   *   This styles must have the dimensions of his parent in order to use an unique dimensions      *    variable
   */

  const nameStarJoiner = {
    width: WIDTH / 1.3,
  };
  return (
    <View style={styles.container}>
      {/* First Row */}
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={[styles.nameStarJoiner, nameStarJoiner]}>
            <Text style={[styles.name, textInline]}>{item.name}</Text>
            <View style={styles.starView}>
              <FontAwesome
                name={'star'}
                color={'#F5BF45'}
                size={16}
                style={styles.icon}
              />
              <Text style={[styles.mark, textInline]}>3.5</Text>
            </View>
          </View>
          <Text style={[styles.category, textInline]}>{item.category}</Text>
        </View>
      </View>
      {/* Second Row */}
      <View style={styles.row}>
        <Text style={[styles.price, textInline]}>{item.price + ' €'}</Text>
        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#46ABC2'}]}>
            <Ionicons
              name={'heart-outline'}
              size={20}
              style={styles.icon}
              color={'white'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]}>
            <Ionicons
              name={'add'}
              size={25}
              style={styles.icon}
              color={theme.colors.text}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    flex: 0.4,
  },
  column: {
    justifyContent: 'space-around',
  },
  nameStarJoiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
  },
  category: {
    fontFamily: 'System',
    fontSize: 14,
    opacity: 0.6,
    fontWeight: '500',
  },
  starView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 5,
  },
  icon: {
    alignSelf: 'center',
  },
  mark: {
    fontFamily: 'System',
    fontSize: 16,
    opacity: 0.6,
    fontWeight: '500',
    alignSelf: 'center',
  },
  //   SECOND ROW
  price: {
    fontFamily: 'System',
    fontSize: 18,
    opacity: 0.6,
    fontWeight: '500',
    alignSelf: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: Dimensions.get('window').width / 8,
    height: Dimensions.get('window').height / 18,
    borderRadius: 15,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});

export default InfoView;
