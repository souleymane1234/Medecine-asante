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
  Alert,
} from 'react-native';
import {Input, Icon} from '@rneui/themed';
import {COLORS} from '../../variables/color';
import Button from '../../components/Button';
import ImagePicker from 'react-native-image-crop-picker';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Register = ({navigation}) => {

  const [sexeChoiceHomme, setSexeChoiceHomme] = useState(false);
  const [sexeChoiceFemme, setSexeChoiceFemme] = useState(false);
  const [sexeChoiceAutre, setSexeChoiceAutre] = useState(false);
  const [myDate, setMyDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Date de naissance');
  // data state
  const [selectedSpeciality, setSelectedSpeciality] = useState();
  const [selectedHospital, setSelectedHospital] = useState();
  const [prenom, setPrenom] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adresse, setAdresse] = useState('');
  const [photo, setPhoto] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const [title, setTitle] = useState('');
  const [taille, setTaille] = useState('');
  const [poids, setPoids] = useState('');
  const [Spinner, setSpinner] = React.useState(false);
  const [maData, setMaData] = useState();


  const sexeChoice = (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
      }}>
      <View>
        {sexeChoiceHomme == true ? (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(true);
              setSexeChoiceFemme(false);
              setSexeChoiceAutre(false);
              setTitle('Masculin');
            }}>
            <Text style={styles.sexeChoiceTextActif}>Homme</Text>
            <View style={[styles.sexeLineActif, {width: 100}]}></View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(true);
              setSexeChoiceFemme(false);
              setSexeChoiceAutre(false);
              setTitle('Masculin');
            }}>
            <Text style={styles.sexeChoiceTextNoActif}>Homme</Text>
            <View style={[styles.sexeLineNoActif, {width: 100}]}></View>
          </TouchableOpacity>
        )}
      </View>
      <View>
        {sexeChoiceFemme == true ? (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(true);
              setSexeChoiceFemme(false);
              setSexeChoiceAutre(false);
              setTitle('Masculin');
            }}>
            <Text style={styles.sexeChoiceTextActif}>Femme</Text>
            <View style={[styles.sexeLineActif, {width: 100}]}></View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(false);
              setSexeChoiceFemme(true);
              setSexeChoiceAutre(false);
              setTitle('Feminin');
            }}>
            <Text style={styles.sexeChoiceTextNoActif}>Femme</Text>
            <View style={[styles.sexeLineNoActif, {width: 100}]}></View>
          </TouchableOpacity>
        )}
      </View>
      <View>
        {sexeChoiceAutre == true ? (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(true);
              setSexeChoiceFemme(false);
              setSexeChoiceAutre(false);
              setTitle('Masculin');
            }}>
            <Text style={styles.sexeChoiceTextActif}>
              Je préfère ne pas le dire
            </Text>
            <View style={[styles.sexeLineActif, {width: 250}]}></View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(false);
              setSexeChoiceFemme(false);
              setSexeChoiceAutre(true);
              setTitle('Non defini');
            }}>
            <Text style={styles.sexeChoiceTextNoActif}>
              Je préfère ne pas le dire
            </Text>
            <View style={[styles.sexeLineNoActif, {width: 250}]}></View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );


  const openCamera = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      multiple: true,
      cropping: true,
    }).then(result => {
      setPhoto1(result.path);
    });
  };

  const pickImage = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(result => {
      setPhoto(result);
      console.log("photo",photo);
      // ImgToBase64.getBase64String(result.path).then(base64String => {
      //   setImageBase64(base64String);
      //   console.log('base', imageBase64);
      // });
    });
  };
  // console.log('first', imageBase64);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      <ScrollView>
        <View style={styles.logoView}>
          <Image
            source={require('../../assets/logoCouleur.png')}
            style={styles.logo}
          />
          <Text style={styles.textRegister}>Inscription Corps médical</Text>
        </View>
        <View style={{margin: 10}}>
          <Input
            placeholder="Nom"
            rightIcon={{type: 'font-awesome', name: 'user-o', size: 20}}
            onChangeText={nom => setNom(nom)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder="Prénom"
            rightIcon={{type: 'font-awesome', name: 'user-o', size: 20}}
            onChangeText={prenom => setPrenom(prenom)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          {sexeChoice}
          <Input
            placeholder="Numéro de téléphone"
            rightIcon={{type: 'font-awesome', name: 'mobile', size: 25}}
            onChangeText={numero => setNumero(numero)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder="Email"
            rightIcon={{type: 'font-awesome', name: 'envelope', size: 20}}
            onChangeText={email => setEmail(email)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            secureTextEntry
            placeholder="Mots de passe"
            rightIcon={{type: 'font-awesome', name: 'lock', size: 20}}
            onChangeText={password => setPassword(password)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <View style={[styles.sexeLineNoActif, {width: "95%", alignSelf: "center", margin: 10}]}>
                      <Picker
              selectedValue={selectedSpeciality}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedSpeciality(itemValue)
              }
              >
              <Picker.Item label="Spécialité" value="Spécialité" />
              <Picker.Item label="Pediatre" value="pediatre" />
              <Picker.Item label="Generaliste" value="generaliste" />
            </Picker>
          </View>
          <View style={[styles.sexeLineNoActif, {width: "95%", alignSelf: "center", margin: 10}]}>
                      <Picker
              selectedValue={selectedHospital}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedHospital(itemValue)
              }
              >
              <Picker.Item label="Hôpital" value="Hôpital" />
              <Picker.Item label="Sourire d'enfance" value="sourireEnfance" />
              <Picker.Item label="Farah" value="farah" />
            </Picker>
          </View>
          <Input
            placeholder="Numéro d’ordre de médecin"
            rightIcon={{type: 'font-awesome', name: 'mobile', size: 25}}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <View style={{marginBottom: 10, margin: 10}}>
            <Text style={styles.addMediaText}>Ajouter photo de profil</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.selectMediaButton}
                // onPress={() => useLibraryHandler()}
                >
                <Text style={styles.selectMediaText}>Choisir un fichier</Text>
              </TouchableOpacity>
              <View style={{justifyContent: 'center'}}>
                {imageBase64 ? (
                  <Text style={{marginHorizontal: 10}}>
                    Fichier sélectionné
                  </Text>
                ) : (
                  <Text style={{marginHorizontal: 10}}>
                    Aucun fichier sélectionné {'\n'}veuillez réessayé s'il vous
                    plait
                  </Text>
                )}
              </View>
            </View>
          </View>
          <View style={{marginBottom: 10, margin: 10}}>
            <Text style={styles.addMediaText}>Pièce d’identité (CNI, Attestation, Passeport) </Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.selectMediaButton}
                // onPress={() => useLibraryHandler()}
                >
                <Text style={styles.selectMediaText}>Choisir un fichier</Text>
              </TouchableOpacity>
              <View style={{justifyContent: 'center'}}>
                {imageBase64 ? (
                  <Text style={{marginHorizontal: 10}}>
                    Fichier sélectionné
                  </Text>
                ) : (
                  <Text style={{marginHorizontal: 10}}>
                    Aucun fichier sélectionné {'\n'}veuillez réessayé s'il vous
                    plait
                  </Text>
                )}
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.confidentialText}>
            En adhérant, vous acceptez les conditions générales et confirmez que
            vous avez lu et compris la déclaration de confidentialité.
          </Text>
        </View>
        <Button
          onPress={() => 
            // SendData()
            navigation.navigate("HomeScreen")
          }
          title="S’inscrire"
          style={styles.signUpBtn}
          textStyle={styles.signUpBtnTxt}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    height: 40,
    flexDirection: 'row',
    margin: 10,
  },
  headerText: {
    marginHorizontal: 5,
    color: COLORS.black,
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
  sexeChoiceTextActif: {
    color: COLORS.button.principal,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  sexeChoiceTextNoActif: {
    color: COLORS.input_border_color,
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  sexeLineActif: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.button.principal,
  },
  sexeLineNoActif: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.input_border_color,
  },
  birthButton: {
    width: '95%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  birthView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  birthText: {
    marginBottom: 10,
  },
  birthLine: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.input_border_color,
  },
  addMediaText: {
    marginBottom: 10,
  },
  selectMediaButton: {
    borderRadius: 53,
    borderWidth: 1,
    borderColor: '#1C4ED8',
    width: '40%',
    justifyContent: 'center',
    height: 30,
  },
  selectMediaText: {
    color: '#1C4ED8',
    textAlign: 'center',
  },
  signUpBtn: {
    height: 60,
    borderRadius: 39,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.button.principal,
  },
  signUpBtnTxt: {
    fontSize: 18,
    top: -3,
  },
  confidentialText: {
    textAlign: 'center',
    fontSize: 10,
  },
});

export default Register;



