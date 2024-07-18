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

const VisitList = ({navigation}) => {


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
            <Text style={{fontSize: 30, fontWeight: "bold", color: "#000"}}>Visites</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ConsultationForm')}>
                <Icon
                size={35}
                name="plus-circle-outline"
                pack="material"
                color={COLORS.button.principal}
                />
            </TouchableOpacity>

        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
            <Text style={{color: COLORS.black, fontSize: 14, fontWeight: "700"}}>Aujourd’hui</Text>
            <TouchableOpacity>
            <Image source={require('../../assets/Filter.png')} />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.hystotisConsultation}>
                <View style={{margin: 10}}>
                    <Text style={{fontSize: 22, fontWeight: "bold", color: "#000"}}>Sanogo Adama</Text>
                    <Text>consectetuer adipiscing elit, sed diam nonummy </Text>
                    <View style={{flexDirection: "row", top: 5}}>
                        <View>                
                        <Image
                            source={require('../../assets/time.png')}
                            style={{}}
                        />
                        </View>
                        <Text style={{marginHorizontal: 10, fontSize: 12}}>Lundi 19 Février, 2024                        Heure 9:00 - 9:30</Text>
                    </View>
                </View>
                {/* <View style={{backgroundColor: "#000", width: 40, height: 40,  alignItems: "center", justifyContent: "center", borderRadius: 20, margin: 10, alignSelf: "center"}}>
                    <Image
                        source={require('../../assets/direction.png')}
                        style={{}}
                    />
                </View> */}
            </TouchableOpacity>
            <View style={styles.hystotisConsultation}>
                <View style={{margin: 10}}>
                    <Text style={{fontSize: 22, fontWeight: "bold", color: "#000"}}>Coulibaly Sam</Text>
                    <Text>consectetuer adipiscing elit, sed diam nonummy </Text>
                    <View style={{flexDirection: "row", top: 5}}>
                        <View>                
                        <Image
                            source={require('../../assets/time.png')}
                            style={{}}
                        />
                        </View>
                        <Text style={{marginHorizontal: 10, fontSize: 12}}>Lundi 19 Février, 2024                        Heure 9:00 - 9:30</Text>
                    </View>
                </View>
                {/* <View style={{backgroundColor: "#000", width: 40, height: 40,  alignItems: "center", justifyContent: "center", borderRadius: 20, margin: 10, alignSelf: "center"}}>
                    <Image
                        source={require('../../assets/direction.png')}
                        style={{}}
                    />
                </View> */}
            </View>
            <View style={{margin: 10}}>
                <Text style={{color: COLORS.black, fontSize: 14, fontWeight: "700"}}>7 derniers jours</Text>
                <View style={styles.hystotisConsultation7}>
                <View style={{margin: 10}}>
                    <Text style={{fontSize: 22, fontWeight: "bold", color: "#000"}}>Albert Kala</Text>
                    <Text>consectetuer adipiscing elit, sed diam nonummy </Text>
                    <View style={{flexDirection: "row", top: 5}}>
                        <View>                
                        <Image
                            source={require('../../assets/time.png')}
                            style={{}}
                        />
                        </View>
                        <Text style={{marginHorizontal: 10, fontSize: 12}}>Lundi 19 Février, 2024                        Heure 9:00 - 9:30</Text>
                    </View>
                </View>
                {/* <View style={{backgroundColor: "#000", width: 40, height: 40,  alignItems: "center", justifyContent: "center", borderRadius: 20, margin: 10, alignSelf: "center"}}>
                    <Image
                        source={require('../../assets/direction.png')}
                        style={{}}
                    />
                </View> */}
            </View>
            {/* <View style={styles.hystotisConsultation7}>
                <View style={{margin: 10}}>
                    <Text style={{fontSize: 22, fontWeight: "bold", color: "#000"}}>Franck Yao</Text>
                    <Text>consectetuer adipiscing elit, sed diam nonummy </Text>
                    <View style={{flexDirection: "row"}}>
                        <View>                
                        <Image
                            source={require('../../assets/time.png')}
                            style={{}}
                        />
                        </View>
                        <Text style={{marginHorizontal: 10}}>Lundi 19 Février, 2024                        Heure 9:00 - 9:30</Text>
                    </View>
                </View>
                <View style={{backgroundColor: "#000", width: 40, height: 40,  alignItems: "center", justifyContent: "center", borderRadius: 20, margin: 10, alignSelf: "center"}}>
                    <Image
                        source={require('../../assets/direction.png')}
                        style={{}}
                    />
                </View>
            </View>
            <View style={styles.hystotisConsultation7}>
                <View style={{margin: 10}}>
                    <Text style={{fontSize: 22, fontWeight: "bold", color: "#000"}}>Sanogo Adama</Text>
                    <Text>consectetuer adipiscing elit, sed diam nonummy </Text>
                    <View style={{flexDirection: "row"}}>
                        <View>                
                        <Image
                            source={require('../../assets/time.png')}
                            style={{}}
                        />
                        </View>
                        <Text style={{marginHorizontal: 10}}>Lundi 19 Février, 2024                        Heure 9:00 - 9:30</Text>
                    </View>
                </View>
                <View style={{backgroundColor: "#000", width: 40, height: 40,  alignItems: "center", justifyContent: "center", borderRadius: 20, margin: 10, alignSelf: "center"}}>
                    <Image
                        source={require('../../assets/direction.png')}
                        style={{}}
                    />
                </View>
            </View> */}
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
    backgroundColor: "#EDFFE3",
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

export default VisitList;
