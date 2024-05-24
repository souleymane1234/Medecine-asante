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

const Login = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      <ScrollView>
        <View style={{height: windowHeight/2}}>
        <View style={styles.logoView}>
          <Image
            source={require('../../assets/logoCouleur.png')}
            style={styles.logo}
          />
        </View>
        <View style={{}}>
          <Image
            source={require('../../assets/login.png')}
            style={{alignSelf: "center"}}
          />
        </View>
        </View>
        <View style={{height: windowHeight/2}}>
            <ImageBackground source={require('../../assets/back.png')} resizeMode="cover" style={styles.image}>
                <View style={{margin: 10}}>
                    <Text style={{fontSize: 26, margin: 10, fontWeight: "bold", color: "#fff"}}>Connectez-vous </Text>
                    <Input
                        placeholder="Email / Numéro d’ordre de médecin"
                        placeholderTextColor= "#fff" 
                        inputContainerStyle={{
                        borderColor: COLORS.white,
                        }}
                    />
                    <Input
                        placeholder="Mot de passe"
                        placeholderTextColor= "#fff" 
                        inputContainerStyle={{
                        borderColor: COLORS.white,
                        }}
                    />
                    <TouchableOpacity style={{margin: 10}}>
                        <Text style={{color: COLORS.white, fontSize: 12}}>Mot de passe oublié ?</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Button
                        title="Se connecter"
                        style={styles.signUpBtn}
                        textStyle={styles.signUpBtnTxt}
                        onPress={() => navigation.navigate('HomeScreen')}
                    />
                    <View style={styles.newAccountView}>
                        <Text style={styles.confidentialText}>
                            Vous n’avez pas de compte ?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.forgotPassText}> Créer un compte</Text>
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
    justifyContent: "flex-end",
  },
  signUpBtn: {
    height: 60,
    borderRadius: 39,
    marginVertical: 10,
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white
  },
  signUpBtnTxt: {
    fontSize: 18,
    top: -3,
    color: COLORS.button.principal
  },
  confidentialText: {
    textAlign: 'center',
    fontSize: 14,
    color: COLORS.white
  },
  forgotPassText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold"
  },
  newAccountView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default Login;
