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
  Dimensions,
  Alert
} from 'react-native';
import {Input, Icon} from '@rneui/themed';
import {COLORS} from '../../variables/color';
import Button from '../../components/Button';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {

  const [numeroMedecin, setNumeroMedecin] = useState();
  const [password, setPassword] = useState();
  const [maData, setMaData] = useState();
  const [Spinner, setSpinner] = useState(false);



  const SendData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "username": numeroMedecin,
      "password": password
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    setSpinner(!Spinner);
    fetch("https://production-api-rest-a-sante-core.ovh.syabe-tech.com/api/v1/connect", requestOptions)
    .then((response) => response.json())
    // .then((result) => console.log(result))
    // .catch((error) => console.error(error));
    .then(result => {
        setSpinner(!Spinner);
        if (result.status == true) {
          setSpinner(false);
          navigation.navigate('HomeScreen', {
            Data: result,
          });
          console.log(result)
          setSpinner(false);
        } else {
          setSpinner(false);
          Alert.alert(
            'Identifiants incorrects',
            'Nom d’utilisateur ou mot de passe incorrect',
          );
        }
        console.log('Patience');
      })
      .catch(error => {
        setSpinner(false);
        console.error(error);
        Alert.alert(
          'Identifiants incorrects',
          'Veulliez vérifié votre nom d’utilisateur ou mot de passe',
        );
        setSpinner(false);
      });
  };

  const Loader = (
    <OrientationLoadingOverlay
      visible={Spinner}
      color="white"
      indicatorSize="large"
      messageFontSize={10}
      message="Veillez patienter un moment!!"
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      {Loader}
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
                        placeholder="Numéro d’ordre de médecin"
                        placeholderTextColor= "#fff" 
                        onChangeText={numeroMedecin => setNumeroMedecin(numeroMedecin)}
                        inputContainerStyle={{
                        borderColor: COLORS.white,
                        }}
                        style={{color: COLORS.white}}
                    />
                    <Input
                        placeholder="Mot de passe"
                        placeholderTextColor= "#fff" 
                        onChangeText={password => setPassword(password)}
                        inputContainerStyle={{
                        borderColor: COLORS.white,
                        }}
                        style={{color: COLORS.white}}
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
                        onPress={() => SendData()}
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
    height: 50,
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
