/**
 * @file: error.js
 * Shows a 404 not found error page.
 */
import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

//THIRD PARTY LIBRARIES
import LottieView from 'react-native-web-lottie';

//ROUTES HANDLER
import {Link} from 'react-router-dom';

//THEME HANDLERS
import {useTheme} from '@react-navigation/native';
import {COLORS} from '../../constants/constants';

const ErrorPage = () => {
  const theme = useTheme();

  //INLINE STYLES
  const containerInline = {backgroundColor: theme.colors.background};
  const lottieBackgroundInline = {backgroundColor: 'rgba(0,0,0,0.2)'};
  const titleColorInline = {
    marginTop: 5,
    color: theme.colors.text,
  };
  const subtitleColorInline = {
    color: theme.colors.text,
  };

  const buttonTextInline = {
    color: COLORS.primary,
  };
  const routerInline = {color: 'transparent'};

  return (
    <View style={[styles.container, containerInline]}>
      <LottieView
        source={require('./animation.json')}
        autoPlay
        loop
        style={styles.lottie}>
        <View style={[styles.lottie, lottieBackgroundInline]} />
      </LottieView>
      <Text style={[styles.title, titleColorInline]}>Error 404</Text>
      <Text style={[styles.title, subtitleColorInline]}>
        ¡La página a la que intentas acceder no existe!
      </Text>

      <Link exact to="/" style={routerInline}>
        <View style={styles.button}>
          <Text style={[styles.subtitle, buttonTextInline]}>Ir al home</Text>
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'System',
    fontSize: 50,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 10,
  },
  button: {
    flex: 0.8,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: COLORS.socialButton,
    marginTop: 20,
  },
  subtitle: {
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: '400',
    alignSelf: 'center',
    color: 'white',
  },
  lottie: {
    width: Dimensions.get('window').width / 2.3,
    height: Dimensions.get('window').height / 1.7,
    justifyContent: 'flex-start',
  },
});

export default ErrorPage;
