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
import {COLORS} from '../../variables/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';

const ConsultationNull = ({navigation}) => {


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      <View style={{flex: 1}}>
        <Image
          source={require('../../assets/consutationNul.png')}
          style={{alignSelf: "center"}}
        />
        <Text style={{textAlign: "center", fontSize: 25, fontWeight: "bold"}}>Aucune consultation enregistrée pour l’instant </Text>
      </View>
      <Button
          title="Créez votre compte"
          icon2="plus-circle"
          style={styles.signUpBtn}
          textStyle={styles.signUpBtnTxt}
          iconStyle={styles.icon}
        />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  signUpBtn: {
    height: 60,
    borderRadius: 39,
    marginVertical: 10,
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.button.principal,
  },
  signUpBtnTxt: {
    fontSize: 18,
    color: COLORS.button.principal,
  },
  icon: {
    marginHorizontal: 10,
    color: COLORS.button.principal
  }
});
20
export default ConsultationNull;
