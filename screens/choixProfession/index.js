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
import { CheckBox } from '@rneui/themed';
import { color } from '@rneui/base';

const ChoixProfession = ({navigation}) => {
    const [docteur, setDocteur] = useState();
    const [analyste, setAnalyste] = useState();
    const [urgentiste, setUrgentiste] = useState();
    const [infirmier, setInfirmier] = useState();
    const [selectedIndex, setIndex] = React.useState(0);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
        <View style={styles.logoView}>
          <Image
            source={require('../../assets/logoCouleur.png')}
            style={styles.logo}
          />
          <Text style={styles.textRegister}>Sélectionnez votre profession</Text>
        </View>
        <View style={{margin: 10, flex: 3}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: "#4ABBEC", height: 70, width: "70%", alignSelf: "center", borderRadius: 10, marginBottom: 25}}>
        {docteur == true ? (
          <TouchableOpacity
            onPress={() => {
              setDocteur(true);
              setAnalyste(false);
              setUrgentiste(false);
              setInfirmier(false);
            }}>
            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 30, color: "#4ABBEC"}}>Docteur</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
                setDocteur(true);
                setAnalyste(false);
                setUrgentiste(false);
                setInfirmier(false);
            }}>
            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 30}}>Docteur</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: "#4ABBEC", height: 70, width: "70%", alignSelf: "center", borderRadius: 10, marginBottom: 25}}>
        {analyste == true ? (
          <TouchableOpacity
            onPress={() => {
                setDocteur(true);
                setAnalyste(false);
                setUrgentiste(false);
                setInfirmier(false);
            }}>
            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 30, color: "#4ABBEC"}}>Analyste</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
                setDocteur(false);
                setAnalyste(true);
                setUrgentiste(false);
                setInfirmier(false);
            }}>
            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 30}}>Analyste</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: "#4ABBEC", height: 70, width: "70%", alignSelf: "center", borderRadius: 10, marginBottom: 25}}>
        {urgentiste == true ? (
          <TouchableOpacity
            onPress={() => {
                setDocteur(true);
                setAnalyste(false);
                setUrgentiste(false);
                setInfirmier(false);
            }}>
            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 30, color: "#4ABBEC"}}>Urgentiste</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
                setDocteur(false);
                setAnalyste(false);
                setUrgentiste(true);
                setInfirmier(false);
            }}>
            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 30}}>Urgentiste</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: "#4ABBEC", height: 70, width: "70%", alignSelf: "center", borderRadius: 10}}>
        {infirmier == true ? (
          <TouchableOpacity
            onPress={() => {
                setDocteur(true);
                setAnalyste(false);
                setUrgentiste(false);
                setInfirmier(false);
            }}>
            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 30, color: "#4ABBEC"}}>Infirmier</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
                setDocteur(false);
                setAnalyste(false);
                setUrgentiste(false);
                setInfirmier(true);
            }}>
            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 30}}>Infirmier</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
        </View>
        <Button
          title="Continuer"
          style={styles.signUpBtn}
          textStyle={styles.signUpBtnTxt}
          onPress={() => navigation.navigate('Start')} 
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logoView: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: "center",
    marginBottom: 30
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
  
  signUpBtn: {
    height: 60,
    borderRadius: 19,
    marginVertical: 10,
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.button.principal,
  },
  signUpBtnTxt: {
    fontSize: 25,
    top: -3,
  },
});

export default ChoixProfession;
