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

const ModalAjoutAntecedentFamilial = ({onPress, onPressRetour}) => {
    const [selectedLien, setSelectedLien] = useState();
    // Modal and state of mode de vie star


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
          <Text style={{fontSize: 20, color: COLORS.black, fontWeight: "bold"}}>Antécédents médicaux familial </Text>
              <Input
                  placeholder="Saisissez un antécédent"
                  inputContainerStyle={{
                  borderColor: COLORS.input_border_color,
                  }}
              /> 
            <View style={[styles.sexeLineNoActif, {width: "95%", alignSelf: "center", margin: 10}]}>
                <Picker
                selectedValue={selectedLien}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLien(itemValue)
                }
                >
                <Picker.Item label="Choisir le lien famillial" value="lien" />
                <Picker.Item label="Pere" value="pere" />
                <Picker.Item label="Mere" value="mere" />
                </Picker>
          </View>
              {/* Commentaire  start  */}
              <View style={{margin: 10}}>
                      <Text style={styles.label}>Commentaire (facultatif)</Text>
                      <Text style={{margin: 10, fontSize: 12}}>Information complémentaire</Text>
                      <View style={{ backgroundColor: '#bce4f5', borderRadius: 10}}>
                          <TextInput
                              style={styles.input}
                              placeholder="Ex. : diagnostic, sévérité, dates, traitement..."
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
      bottom: 50,
      position: "absolute",
      flex: 1
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
      color: COLORS.black,
      fontWeight: "bold"
  
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
    sexeLineNoActif: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.input_border_color,
      },
  });

export default ModalAjoutAntecedentFamilial;
