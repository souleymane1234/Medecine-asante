import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import {Input, Icon} from '@rneui/themed';
import {COLORS} from '../../variables/color';
import Button from '../../components/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Start = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      <ScrollView>
        <View style={{height: windowHeight/2}}>
        <View style={{}}>
          <Image
            source={require('../../assets/start.png')}
            style={{alignSelf: "center"}}
          />
        </View>
        </View>
        <View style={{height: windowHeight/2}}>
            <ImageBackground source={require('../../assets/back.png')} resizeMode="cover" style={styles.image}>
                <View style={{margin: 10}}>
                    <Text style={{fontSize: 40, fontWeight: "bold", color: "#fff"}}>Bienvenue{"\n"}Docteur</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</Text>
                </View>
                <View>
                    <Button
                        title="Créez votre compte"
                        style={styles.signUpBtn}
                        textStyle={styles.signUpBtnTxt}
                        onPress={() => navigation.navigate('Register')} 
                    />
                    <View style={styles.newAccountView}>
                        <Text style={styles.confidentialText}>
                            Déjà un compte ?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{justifyContent: "center"}}>
                            <Text style={styles.forgotPassText}>Connectez vous</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: windowWidth,
    height: windowHeight
  },
  logoView: {
    alignSelf: 'center',
  },
  logo: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  textRegister: {
    textAlign: 'center',
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 24,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  signUpBtn: {
    height: 60,
    borderRadius: 39,
    marginVertical: 10,
    width: '60%',
    backgroundColor: COLORS.white,
    margin: 10
  },
  signUpBtnTxt: {
    fontSize: 18,
    top: -3,
    color: COLORS.button.principal
  },
  confidentialText: {
    margin: 10,
    fontSize: 14,
    color: COLORS.white
  },
  forgotPassText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  newAccountView: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default Start;
