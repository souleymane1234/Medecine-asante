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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ModalAntecedentFamilial = ({onPress, onPressRetour}) => {
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
            <Text style={{fontSize: 20, color: COLORS.black, fontWeight: "bold"}}>Antécédents médicaux familial</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
              <View>
                <Text style={{color: COLORS.black, fontWeight: "bold"}}>Diabète </Text>
              </View>
              <TouchableOpacity>
                <Icon
                 size={20}
                 name="pencil"
                 pack="material"
                 color={COLORS.black}
             />
              </TouchableOpacity>
            </View>
            <View style={{margin: 10}}>
              <Text>Père {"\n"}Mon père a eu du diabète pendant plus de 20 ans. on ignore pourquoi cette destruction des îlots de langerhans se produit, pourquoi chez certaines personnes et pas chez les autres.</Text>
            </View>
            </View>
            <TouchableOpacity
                onPress={onPress}
                style={styles.signUpBtn}
              >
              <Icon
                 size={30}
                 name="plus"
                 pack="material"
                 color={COLORS.white}
              />
              </TouchableOpacity>
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
        height: 65,
        width: 65,
        backgroundColor: COLORS.button.principal,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 5,
        bottom: 50,
        position: "absolute",
        flex: 1,
        alignSelf: "flex-end"
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
    });


export default ModalAntecedentFamilial;
