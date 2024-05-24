import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  Modal,
  Pressable
} from 'react-native';
import {COLORS} from '../../variables/color';
import {Input, CheckBox} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from '@react-native-picker/picker';
import Button from '../Button';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ModalModeVie = ({onPress, onPressRetour}) => {
    // Modal and state of mode de vie start
    const [modeVieModalVisible, setModeVieModalVisible] = useState(false);
    const [selectedMode, setSelectedMode] = useState();
    const [selectedAssurance, setSelectedAssurance] = useState();
    const [selectedVille, setSelectedVille] = useState();
    const [selectedCommune, setSelectedCommune] = useState();
    const [check1, setCheck1] = useState(false);



  return (
    <SafeAreaView>
        <ScrollView>
        <View style={styles.centeredViewModeVie} >
        <TouchableOpacity style={styles.header} onPress={onPressRetour}>
            <View style={{flexDirection: "row"}}>
                <View style={{justifyContent: 'center'}}>
                    <Image source={require('../../assets/chevron-left.png')} />
                </View>
                <View style={{justifyContent: 'center', marginHorizontal: 5}}>
                    <Text style={styles.headerText}>Retour</Text>
                </View>
            </View>
            <View style={{}}>
                    <Text style={{fontSize: 30, color: COLORS.black, fontWeight: "bold"}}>Consultation</Text>
            </View>
            <View></View>
        </TouchableOpacity>
        <View style={{margin: 10}}>
            <Text style={{fontSize: 14, color: COLORS.black}}>Condition sociaux économique</Text>
            <View style={[styles.selection, {width: "95%", alignSelf: "center", margin: 10}]}>
                    <Picker
                        selectedValue={selectedMode}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedMode(itemValue)
                        }
                        >
                        <Picker.Item label="Choisir votre mode de vie" value="choixModeVie" />
                        <Picker.Item label="Mode 1" value="mode 1" />
                        <Picker.Item label="Mode 2" value="mode 2" />
                    </Picker>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <Text style={{fontSize: 14, color: COLORS.black}}>Aduction eau & courant</Text>
                <CheckBox
                    iconRight
                    title="Cochez cette case si
                    vous avez accès à l’eau et courant"
                    textStyle={{fontSize: 10, fontWeight: "normal"}}
                    checked={check1}
                    onPress={() => setCheck1(!check1)}
                />
            </View>
            <Input
                placeholder="Effectif familiale"
                inputContainerStyle={{
                borderColor: COLORS.input_border_color,
                }}
            /> 
            {/* Habitude de vie  start  */}
            <View style={{margin: 10}}>
                    <Text style={styles.label}>Habitude de vie </Text>
                    <View style={{ backgroundColor: '#bce4f5', borderRadius: 10}}>
                        <TextInput
                            style={styles.input}
                            placeholder="Entrez votre texte ici ..."
                        />
                        <TouchableOpacity style={{margin: 10}}>
                            <Icon
                                size={25}
                                name="microphone"
                                pack="material"
                                color={COLORS.black}
                            />
                        </TouchableOpacity>
                    </View>
            </View>
            {/* Habitude de vie  end  */}

            {/* Assurance picker  start  */}
            <View style={[styles.selection, {width: "95%", alignSelf: "center", margin: 10}]}>
                    <Picker
                        selectedValue={selectedAssurance}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedAssurance(itemValue)
                        }
                        >
                        <Picker.Item label="Assurance " value="assurance" />
                        <Picker.Item label="Mugefci" value="Mugefci" />
                        <Picker.Item label="Ascoma" value="Ascoma" />
                    </Picker>
            </View>
            {/* Assurance picker  end  */}
            {/* Ville picker  start  */}
                        <View style={[styles.selection, {width: "95%", alignSelf: "center", margin: 10}]}>
                    <Picker
                        selectedValue={selectedVille}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedVille(itemValue)
                        }
                        >
                        <Picker.Item label="Ville" value="ville" />
                        <Picker.Item label="Abidjan" value="Abidjan" />
                        <Picker.Item label="Bouake" value="Bouake" />
                    </Picker>
            </View>
            {/* Ville picker  end  */}
            {/* Commune picker  start  */}
                        <View style={[styles.selection, {width: "95%", alignSelf: "center", margin: 10}]}>
                    <Picker
                        selectedValue={selectedCommune}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedCommune(itemValue)
                        }
                        >
                        <Picker.Item label="Commune" value="commune" />
                        <Picker.Item label="Marcory" value="Marcory" />
                        <Picker.Item label="Cocody" value="Cocody" />
                    </Picker>
            </View>
            {/* Commune picker  end  */}
        </View>
        <Button
          onPress={onPress}
          title="Enregistrer"
          style={styles.signUpBtn}
          textStyle={styles.signUpBtnTxt}
        />
        </View>
        </ScrollView>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredViewModeVie: {
    flex: 1,
    backgroundColor: COLORS.white,
    margin: 10,
    height: windowHeight
  },
  modalViewModeVie: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTextModeVie: {
    marginBottom: 15,
    textAlign: 'center',
  },
  selection: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.input_border_color,
  },
  signUpBtn: {
    height: 60,
    borderRadius: 39,
    marginVertical: 10,
    width: '70%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.button.principal,
  },
  signUpBtnTxt: {
    fontSize: 18,
    top: -3,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: windowWidth,
    height: windowHeight
  },
  header: {
    height: 40,
    flexDirection: 'row',
    margin: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerText: {
    marginHorizontal: 5,
    color: COLORS.black,
  },
  label:{
    fontSize:16,
    margin: 10,
    color: COLORS.black

  },
  input: {
    width: '100%',
    height: 60,
    backgroundColor: '#bce4f5',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    marginTop:10
  },
  step1Content: {
    backgroundColor: "#bce4f5",
    margin: 10,
    borderRadius: 10
  },
});

export default ModalModeVie;
