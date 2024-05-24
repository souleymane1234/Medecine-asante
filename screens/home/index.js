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
  Dimensions
} from 'react-native';
import {COLORS} from '../../variables/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
    const [accueil, setAccueil] = useState(true);
    const [consultation, setConsultation] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profil, setProfil] = useState(false);

    const BottomBar = (
        <View
          style={{
            height: 50,
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'space-around',
            elevation: 10,
            zIndex: 2,
            width: '100%',
            position: 'absolute',
            bottom: 0,
            flex: 1,
            right: 0,
            left: 0,
          }}>
          <View
            style={{justifyContent: 'center', alignItems: 'center', width: '20%'}}>
            {accueil == true ? (
              <TouchableOpacity
                style={styles.footerCartContainer}
                onPress={() => {
                  setAccueil(false);
                //   setConsultation(false);
                  setNotification(false);
                  setProfil(false);
                }}>
                <Icon
                  size={30}
                  name="home"
                  pack="material"
                  style={styles.bottomBarIconActif}
                />
                <Text style={styles.BottomBarTextActif}>Accueil</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setAccueil(true);
                //   setConsultation(false);
                  setNotification(false);
                  setProfil(false);
                }}>
                <Icon
                  size={30}
                  name="home"
                  pack="material"
                  style={styles.bottomBarIconNoActif}
                />
                <Text style={styles.BottomBarTextNoActif}>Accueil</Text>
              </TouchableOpacity>
            )}
          </View>
          {/* <View
            style={{justifyContent: 'center', alignItems: 'center', width: '20%'}}>
            {consultation == true ? (
              <TouchableOpacity
                style={styles.footerCartContainer}
                onPress={() => {
                  setAccueil(true);
                //   setConsultation(false);
                  setNotification(false);
                  setProfil(false);
                }}>
                <Icon
                  size={30}
                  name="doctor"
                  pack="material"
                  style={styles.bottomBarIconActif}
                />
                <Text style={styles.BottomBarTextActif}>Consultation</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setAccueil(false);
                //   setConsultation(true);
                //   navigation.navigate('ConsultationList');
                  setNotification(false);
                  setProfil(false);
                }}>
                <Icon
                  size={30}
                  name="doctor"
                  pack="material"
                  style={styles.bottomBarIconNoActif}
                />
                <Text style={styles.BottomBarTextNoActif}>Consultation</Text>
              </TouchableOpacity>
            )}
          </View> */}
          <View
            style={{justifyContent: 'center', alignItems: 'center', width: '20%'}}>
            {notification == true ? (
              <TouchableOpacity
                style={styles.footerCartContainer}
                onPress={() => {
                  setAccueil(true);
                //   setConsultation(false);
                  setNotification(false);
                  setProfil(false);
                }}>
                <Icon
                  size={30}
                  name="bell"
                  pack="material"
                  style={styles.bottomBarIconActif}
                />
                <Text style={styles.BottomBarTextActif}>Notifications</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setAccueil(false);
                //   setConsultation(false);
                  setNotification(true);
                  setProfil(false);
                }}>
                <Icon
                  size={30}
                  name="bell"
                  pack="material"
                  style={styles.bottomBarIconNoActif}
                />
                <Text style={styles.BottomBarTextNoActif}>Notifications</Text>
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', width: '20%'}}>
            {profil == true ? (
              <TouchableOpacity
                style={styles.footerCartContainer}
                onPress={() => {
                  setAccueil(true);
                //   setConsultation(false);
                  setNotification(false);
                  setProfil(false);
                }}>
                <Icon
                  size={30}
                  name="account-circle-outline"
                  pack="material"
                  style={styles.bottomBarIconActif}
                />
                <Text style={styles.BottomBarTextActif}>Profil</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setAccueil(false);
                //   setConsultation(false);
                  setNotification(false);
                  setProfil(true);
                }}>
                <Icon
                  size={30}
                  name="account-circle-outline"
                  pack="material"
                  style={styles.bottomBarIconNoActif}
                />
                <Text style={styles.BottomBarTextNoActif}>Profil</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      );

      const Accueil = (
        <View
          style={{
            height: windowHeight,
            width: windowWidth,
          }}>
                  <ScrollView>
        {/* doc card start  */}
        <View style={styles.docCard}>
            <View style={{margin: 10}}>
                <Text style={{fontSize: 25, fontWeight: "bold", color: "#000"}}>Dr. Sarrah Cecile</Text>
                <Text style={{marginBottom: 10}}>Généraliste</Text>
                <Text>
                    <Text style={{fontSize: 12}}>Centre médical</Text>
                    <Text style={{fontWeight: "bold", fontSize: 14}}> Sourire d’enfance</Text>
                </Text>
            </View>
            <View style={{margin: 10}}>
                <Image
                    source={require('../../assets/doc.png')}
                    style={{}}
                />
            </View>
        </View>
        {/* doc card end  */}
        <View>
            {/* first row card  start*/}
            <View style={{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
                {/* first card start  */}
                <TouchableOpacity onPress={() => navigation.navigate('ConsultationList')} style={{backgroundColor: "#F4ECFF", width: "48%", borderRadius: 20}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
                        <View>
                            <Text style={{fontSize: 20, fontWeight: "bold", color: "#000"}}>Consultations</Text>
                            <Text style={{fontSize: 60, fontWeight: "bold", color: "#000"}}>8</Text>
                        </View>
                        <View style={{backgroundColor: "#fff", width: 40, height: 40, borderRadius: 30, alignItems: "center", justifyContent: "center"}}>
                            <Image
                                source={require('../../assets/consultation.png')}
                                style={{}}
                            />
                        </View>
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={{textAlign: "right", fontSize: 12}}>Aujourd’hui </Text>
                    </View>
                </TouchableOpacity>
                 {/* first card end  */}
                {/* second card start  */}
                <TouchableOpacity style={{backgroundColor: "#EAFFFD", width: "48%", borderRadius: 20}} onPress={() => navigation.navigate('PatientList')}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
                        <View>
                            <Text style={{fontSize: 20, fontWeight: "bold", color: "#000"}}>Mes patients</Text>
                            <Text style={{fontSize: 60, fontWeight: "bold", color: "#000"}}>34</Text>
                        </View>
                        <View style={{backgroundColor: "#fff", width: 40, height: 40, borderRadius: 30, alignItems: "center", justifyContent: "center"}}>
                            <Image
                                source={require('../../assets/consultation.png')}
                                style={{}}
                            />
                        </View>
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={{textAlign: "right", fontSize: 12}}>Aujourd’hui </Text>
                    </View>
                </TouchableOpacity>
                 {/* second card end  */}
            </View>
            {/* first row card  end*/}
            {/* second row card  start*/}
            <View style={{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
                {/* first card start  */}
                <TouchableOpacity style={{backgroundColor: "#EDFFE3", width: "48%", borderRadius: 20}} onPress={() => navigation.navigate('VisitList')}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
                        <View>
                            <Text style={{fontSize: 20, fontWeight: "bold", color: "#000"}}>Visites</Text>
                            <Text style={{fontSize: 60, fontWeight: "bold", color: "#000"}}>2</Text>
                        </View>
                        <View style={{backgroundColor: "#fff", width: 40, height: 40, borderRadius: 30, alignItems: "center", justifyContent: "center"}}>
                            <Image
                                source={require('../../assets/consultation.png')}
                                style={{}}
                            />
                        </View>
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={{textAlign: "right", fontSize: 12}}>Aujourd’hui </Text>
                    </View>
                </TouchableOpacity>
                 {/* first card end  */}
                {/* second card start  */}
                <View style={{backgroundColor: "#FCF0F6", width: "48%", borderRadius: 20}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
                        <View>
                            <Text style={{fontSize: 20, fontWeight: "bold", color: "#000"}}>Rapport analyse</Text>
                            <Text style={{fontSize: 60, fontWeight: "bold", color: "#000"}}>0</Text>
                        </View>
                        <View style={{backgroundColor: "#fff", width: 40, height: 40, borderRadius: 30, alignItems: "center", justifyContent: "center"}}>
                            <Image
                                source={require('../../assets/consultation.png')}
                                style={{}}
                            />
                        </View>
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={{textAlign: "right", fontSize: 12}}>Aujourd’hui </Text>
                    </View>
                </View>
                 {/* second card end  */}
            </View>
            {/* second row card  end*/}
        </View>
        {/* four bloc card end  */}
        {/* historique view start */}
        <View>
            <View style={{margin: 10}}>
                <Text style={{fontSize: 22, fontWeight: "bold"}}>Historique consultation</Text>
            </View>
            <View style={styles.hystotisConsultation}>
                <View style={{margin: 10}}>
                    <Text style={{fontSize: 22, fontWeight: "bold", color: "#000"}}>Legré Arnaud</Text>
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
            <View style={styles.hystotisConsultation}>
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
            </View>
        </View>

      </ScrollView>
        </View>
      );
    
      const Consultation = (
        <View style={{height: windowHeight, width: windowWidth}}>
    
        </View>
      );
    
      const Notification = (
        <View style={{height: windowHeight, width: windowWidth, justifyContent: "center"}}>
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <Text style={{color: COLORS.black, fontSize: 18}}>La notification est en maintenace</Text>
            </View>
    
        </View>
      );
    
      const Profil = (
        <View style={{height: windowHeight, width: windowWidth, justifyContent: "center"}}>
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <Text style={{color: COLORS.black, fontSize: 18}}>Le profil du docteur est en maintenace</Text>
            </View>
    
        </View>
      );
    

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />

      <View style={{height: windowHeight}}>
            {accueil && Accueil}
            <View style={{}}>
              <View
                style={[
                  {
                    backgroundColor: null,
                    borderRadius: null,
                    width: windowWidth,
                    height: windowHeight,
                  },
                ]}>
                {/* {consultation && Consultation} */}
                {notification && Notification}
                {profil && Profil}
              </View>
            </View>
          </View>
          {BottomBar}
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
  docCard: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: "95%", 
    backgroundColor: "#DFF6FF", 
    alignSelf: "center", 
    margin: 10, 
    height: 120, 
    borderRadius: 20, 
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,

elevation: 2
  },
hystotisConsultation: {
    flexDirection: "row", 
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
  bottomBarIconActif: {
    alignSelf: 'center',
    color: COLORS.button.principal,
  },
  BottomBarTextActif: {
    color: COLORS.button.principal,
    fontSize: 16,
    textAlign: 'center',
  },
  bottomBarIconNoActif: {
    alignSelf: 'center',
    color: COLORS.black,
  },
  BottomBarTextNoActif: {
    color: COLORS.black,
    fontSize: 16,
  },
});

export default HomeScreen;
