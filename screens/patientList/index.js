import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import {COLORS} from '../../variables/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PatientList = ({navigation}) => {


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}>
        <View style={{justifyContent: 'center'}}>
          <Image source={require('../../assets/chevron-left.png')} />
        </View>
        <View style={{justifyContent: 'center', marginHorizontal: 5}}>
          <Text style={styles.headerText}>Retour</Text>
        </View>
      </TouchableOpacity>
      <View>
        <View style={{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
            <Text style={{fontSize: 30, fontWeight: "bold", color: "#000"}}>Mes patients</Text>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
            <Text style={{color: COLORS.black, fontSize: 14, fontWeight: "700"}}>Aujourd’hui</Text>
            <TouchableOpacity>
            <Image source={require('../../assets/Filter.png')} />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.hystotisConsultation}>
            <View style={{flexDirection: "row"}}>
                <View style={{margin: 10}}>
                    <Image source={require('../../assets/img1.png')} />
                </View>
                <View style={{justifyContent: "center"}}>
                    <Text style={{fontSize: 20, color: COLORS.black, fontWeight: "bold"}}>Sidibé Lacina</Text>
                    <Text style={{fontSize: 14}}>Ingenieur Batiment</Text>
                    <Text style={{fontSize: 12}}>Abidjan, Cocody Angré 7e Tranche</Text>
                    <Text style={{fontSize: 12}}>43ans / 185cm / 84Kg</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", alignItems: "flex-end", margin: 10, justifyContent: "center"}}>
                <Text style={{fontSize: 18, color: COLORS.black, fontWeight: "bold"}}>Détails</Text>
                <Image source={require('../../assets/chevron-right.png')} style={{marginHorizontal: 10}}/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.hystotisConsultation}>
            <View style={{flexDirection: "row"}}>
                <View style={{margin: 10}}>
                    <Image source={require('../../assets/img4.png')} />
                </View>
                <View style={{justifyContent: "center"}}>
                    <Text style={{fontSize: 20, color: COLORS.black, fontWeight: "bold"}}>Bley Vanessa</Text>
                    <Text style={{fontSize: 14}}>Ingenieur Batiment</Text>
                    <Text style={{fontSize: 12}}>Abidjan, Cocody Angré 7e Tranche</Text>
                    <Text style={{fontSize: 12}}>43ans / 185cm / 84Kg</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", alignItems: "flex-end", margin: 10, justifyContent: "center"}}>
                <Text style={{fontSize: 18, color: COLORS.black, fontWeight: "bold"}}>Détails</Text>
                <Image source={require('../../assets/chevron-right.png')} style={{marginHorizontal: 10}}/>
            </View>
        </TouchableOpacity>
        <View style={{margin: 10}}>
            <Text style={{color: COLORS.black, fontSize: 14, fontWeight: "700"}}>7 derniers jours</Text>
            <TouchableOpacity style={styles.hystotisConsultation7}>
            <View style={{flexDirection: "row"}}>
                <View style={{margin: 10}}>
                    <Image source={require('../../assets/img3.png')} />
                </View>
                <View style={{justifyContent: "center"}}>
                    <Text style={{fontSize: 20, color: COLORS.black, fontWeight: "bold"}}>Leferve Marie</Text>
                    <Text style={{fontSize: 14}}>Ingenieur Batiment</Text>
                    <Text style={{fontSize: 12}}>Abidjan, Cocody Angré 7e Tranche</Text>
                    <Text style={{fontSize: 12}}>43ans / 185cm / 84Kg</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", alignItems: "flex-end", margin: 10, justifyContent: "center"}}>
                <Text style={{fontSize: 18, color: COLORS.black, fontWeight: "bold"}}>Détails</Text>
                <Image source={require('../../assets/chevron-right.png')} style={{marginHorizontal: 10}}/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.hystotisConsultation7}>
            <View style={{flexDirection: "row"}}>
                <View style={{margin: 10}}>
                    <Image source={require('../../assets/img4.png')} />
                </View>
                <View style={{justifyContent: "center"}}>
                    <Text style={{fontSize: 20, color: COLORS.black, fontWeight: "bold"}}>Bley Vanessa</Text>
                    <Text style={{fontSize: 14}}>Ingenieur Batiment</Text>
                    <Text style={{fontSize: 12}}>Abidjan, Cocody Angré 7e Tranche</Text>
                    <Text style={{fontSize: 12}}>43ans / 185cm / 84Kg</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", alignItems: "flex-end", margin: 10, justifyContent: "center"}}>
                <Text style={{fontSize: 18, color: COLORS.black, fontWeight: "bold"}}>Détails</Text>
                <Image source={require('../../assets/chevron-right.png')} style={{marginHorizontal: 10}}/>
            </View>
        </TouchableOpacity>
        </View>
      </View>
      
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
  header: {
    height: 40,
    flexDirection: 'row',
    margin: 10,
  },
  headerText: {
    marginHorizontal: 5,
    color: COLORS.black,
  },
  hystotisConsultation: {
    flexDirection: "row", 
    backgroundColor: "#EAFFFD",
    padding: 2,
    width: "95%", 
    alignSelf: "center", 
    justifyContent: "space-between", 
    margin: 10, 
    borderRadius: 10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.18,
shadowRadius: 1.00,

elevation: 1
  },
  hystotisConsultation7: {
    flexDirection: "row", 
    backgroundColor: "#F6F6F6",
    padding: 2,
    width: "95%", 
    alignSelf: "center", 
    justifyContent: "space-between", 
    margin: 10, 
    borderRadius: 10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.18,
shadowRadius: 1.00,

elevation: 1
  }
});

export default PatientList;
