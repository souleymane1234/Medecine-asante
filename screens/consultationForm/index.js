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
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {Input, CheckBox} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Line from '../../components/Line';
import LineRight from '../../components/LineRight';
import Button from '../../components/Button';
import ModalModeVie from '../../components/modals/modaleModeVie';
import ModalAjoutAntecedentPerso from '../../components/modals/modalAjoutAntecedentperso';
import ModalAntecedentPerso from '../../components/modals/modalAntecedentperso';
import ModalAntecedentFamilial from '../../components/modals/modalAntecedentFamiliale';
import ModalAjoutAntecedentFamilial from '../../components/modals/modaljoutAntecedentFamilial';
import ModalAntecedentChirurgicaux from '../../components/modals/modalAntecedentChirurgicaux';
import ModalAjoutAntecedentChirurgicaux from '../../components/modals/modalAjoutAntecedentChirurgicaux';
import ModalAntecedentGynecoObstetrie from '../../components/modals/modalAntecedentGynecoObstetrie';
import ModalAjoutAntecedentGynecoObstetrie from '../../components/modals/modalAjoutAntecedentGynecoObstetrie';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ConsultationForm = ({navigation}) => {
    const [step1Data, setStep1Data] = useState({ name: '', age: '', taille: '', poids: '', imc: '', temperature: '', ta: '', fc: '', saturation: '', date: '' });
    const [step2Data, setStep2Data] = useState({ motifConsultation: '', histoireMaladie: '' });
    const [step3Data, setStep3Data] = useState({ motifMaladie: '' });
    const [step4Data, setStep4Data] = useState({ examenClinique: '', hypotheseDiagnostic: '', examenParaclinique: '' });
    const [step5Data, setStep5Data] = useState({ diagnosticRetenu: ''});
    // Modal and state of mode de vie start
    const [modeVieModalVisible, setModeVieModalVisible] = useState(false);
    const [ajoutAntecedentPersoModalVisible, setAjoutAntecedentPersoModalVisible] = useState(false);
    const [antecedentPersoModalVisible, setAntecedentPersoModalVisible] = useState(false);
    const [antecedentFamilialModalVisible, setAntecedentFamilialModalVisible] = useState(false);
    const [ajoutAntecedentFamilialModalVisible, setAjoutAntecedentFamilialModalVisible] = useState(false);
    const [antecedentChirurgicauxModalVisible, setAntecedentChirurgicauxModalVisible] = useState(false);
    const [ajoutAntecedentChirurgicauxModalVisible, setAjoutAntecedentChirurgicauxModalVisible] = useState(false);
    const [antecedentGynecoObstetrieModalVisible, setAntecedentGynecoObstetrieModalVisible] = useState(false);
    const [ajoutAntecedentGynecoObstetrieModalVisible, setAjoutAntecedentGynecoObstetrieModalVisible] = useState(false);


    const buttonTextStyle = {
        color: COLORS.white,
        backgroundColor: COLORS.button.principal,
        width: "100%",
        padding: 10,
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10
    };
    const previousBtnText = {
        color: COLORS.white,
    };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
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
        <ScrollView>
        <ProgressSteps completedProgressBarColor={COLORS.button.principal} completedStepIconColor={COLORS.button.principal} activeLabelColor={COLORS.button.principal} activeStepIconBorderColor={COLORS.button.principal}>
            {/* step 1 start  */}
        <ProgressStep label="Etape 1" nextBtnTextStyle={buttonTextStyle} nextBtnText='Suivant'>
            <View style={{margin: 10}}>
                <Text style={{fontSize: 16, color: COLORS.black, fontWeight: "700"}}>Constante patient</Text>
            </View>
          <View style={styles.step1Content}>
          <Input
            placeholder="Nom & prénom"
            value={step1Data.name}
            onChangeText={text => setStep1Data({ ...step1Data, name: text })}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          /> 
        <Input
          placeholder="Age"
          value={step1Data.age}
          onChangeText={text => setStep1Data({ ...step1Data, age: text })}
          inputContainerStyle={{
            borderColor: COLORS.input_border_color,
          }}
        />
        <Input
            placeholder="Taille (cm)"
            value={step1Data.taille}
            onChangeText={text => setStep1Data({ ...step1Data, taille: text })}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
        />
        <Input
            placeholder="Poids (Kg)"
            value={step1Data.poids}
            onChangeText={text => setStep1Data({ ...step1Data, poids: text })}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
        />
        <Input
            placeholder="IMC (kg/mm)"
            value={step1Data.imc}
            onChangeText={text => setStep1Data({ ...step1Data, imc: text })}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
        />
        <Input
            placeholder="Température (˚C)"
            value={step1Data.temperature}
            onChangeText={text => setStep1Data({ ...step1Data, temperature: text })}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
        />
        <Input
            placeholder="TA (mmHg)"
            value={step1Data.ta}
            onChangeText={text => setStep1Data({ ...step1Data, ta: text })}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
        />
        <Input
            placeholder="Fc"
            value={step1Data.fc}
            onChangeText={text => setStep1Data({ ...step1Data, fc: text })}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
        />
        <Input
            placeholder="Saturation (SaO2)"
            value={step1Data.saturation}
            onChangeText={text => setStep1Data({ ...step1Data, saturation: text })}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
        />
        <Input
            placeholder="Choisir une date "
            value={step1Data.date}
            onChangeText={text => setStep1Data({ ...step1Data, date: text })}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
        />
        </View>
        <View style={{flexDirection: "row", backgroundColor: "#bce4f5", alignItems: "center", margin: 10, padding: 10, borderRadius: 5}}>
            <Image source={require('../../assets/traitement.png')} />
            <Text style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>Traitement Entrepris</Text>
        </View>
        <View style={{margin: 10}}>
            <Text style={{color: COLORS.black, fontSize: 14, fontWeight: "bold"}}>Paracétamol</Text>
            <Text style={{fontSize: 12}}>Depuis le 17 avril 2024</Text>
            <Text style={{fontSize: 12}}>2 cachets par jour, matin et soir</Text>
        </View>
        <Line/>
        <View style={{margin: 10}}>
            <Text style={{color: COLORS.black, fontSize: 14, fontWeight: "bold"}}>Paracétamol 1g</Text>
            <Text style={{fontSize: 12}}>Depuis le 04 décembre 2023</Text>
            <Text style={{fontSize: 12}}>2 cachets par jour, matin et soir</Text>
        </View>
        </ProgressStep>
        {/* step 2 end  */}
        <ProgressStep label="Etape 2" nextBtnTextStyle={buttonTextStyle} nextBtnText='Suivant' previousBtnTextStyle={previousBtnText}>
          <View style={styles.stepContent}>
            <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", margin: 10, padding: 10}} onPress={() => setModeVieModalVisible(true)}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image source={require('../../assets/House.png')} />
                    <Text style={{marginHorizontal: 20, fontSize: 18, fontWeight: "bold", color: COLORS.black}}>Mode de vie</Text>
                </View>
                <View>
                    <Image source={require('../../assets/chevron-right.png')} />
                </View>
            </TouchableOpacity>
            {/* Motif consultation start  */}
            <View style={{margin: 10}}>
                <Text style={styles.label}>Motifs de consultation</Text>
                <View style={{ flex: 1,backgroundColor: '#bce4f5', borderRadius: 10}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez votre texte ici ..."
                        secureTextEntry={true}
                        value={step2Data.motifConsultation}
                        onChangeText={text => setStep2Data({ ...step2Data, motifConsultation: text })}
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
            {/* Motif consultation end  */}
            {/* Motif histoire de la maladie start  */}
            <View style={{margin: 10}}>
                <Text style={styles.label}>Histoire de la maladie</Text>
                <View style={{ flex: 1,backgroundColor: '#bce4f5', borderRadius: 10}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez votre texte ici ..."
                        secureTextEntry={true}
                        value={step2Data.histoireMaladie}
                        onChangeText={text => setStep2Data({ ...step2Data, histoireMaladie: text })}
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
            {/* Motif histoire de la maladie end  */}
            {/* <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", margin: 10, padding: 10}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image source={require('../../assets/rapport.png')} />
                    <View>
                        <Text style={{marginHorizontal: 20, fontSize: 18, color: COLORS.black}}>Rapport des dernières consultations</Text>
                        <Text style={{marginHorizontal: 20, fontSize: 16, color: "#1E3A8A"}}>Voir le rapport</Text>
                    </View>
                </View>
                <View>
                    <Image source={require('../../assets/chevron-right.png')} />
                </View>
            </TouchableOpacity> */}

          </View>
        </ProgressStep>
        <ProgressStep label="Etape 3" nextBtnText='Suivant' nextBtnTextStyle={buttonTextStyle}  previousBtnTextStyle={previousBtnText}>
          <View style={styles.stepContent}>
             {/* Motif de la maladie start  */}
          <View style={{margin: 10}}>
                <Text style={styles.label}>Motif de la maladie</Text>
                <View style={{ flex: 1,backgroundColor: '#bce4f5', borderRadius: 10}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez votre texte ici ..."
                        secureTextEntry={true}
                        value={step3Data.motifMaladie}
                        onChangeText={text => setStep3Data({ ...step3Data, motifMaladie: text })}
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
            {/* Motif de la maladie end  */}
            <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", margin: 10, padding: 10}} onPress={() => setAntecedentPersoModalVisible(true)}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={{marginHorizontal: 20, fontSize: 18, color: COLORS.black}}>Antécédents médicaux personnel</Text>
                </View>
                <View>
                    <Image source={require('../../assets/chevron-right.png')} />
                </View>
            </TouchableOpacity>
            <Line/>
            <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", margin: 10, padding: 10}} onPress={() => setAntecedentFamilialModalVisible(true)}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={{marginHorizontal: 20, fontSize: 18, color: COLORS.black}}>Antécédents médicaux familial</Text>
                </View>
                <View>
                    <Image source={require('../../assets/chevron-right.png')} />
                </View>
            </TouchableOpacity>
            <Line/>
            <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", margin: 10, padding: 10}} onPress={() => setAntecedentChirurgicauxModalVisible(true)}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={{marginHorizontal: 20, fontSize: 18, color: COLORS.black}}>Antécédents chirurgicaux</Text>
                </View>
                <View>
                    <Image source={require('../../assets/chevron-right.png')} />
                </View>
            </TouchableOpacity>
            <Line/>
            <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", margin: 10, padding: 10}} onPress={() => setAntecedentGynecoObstetrieModalVisible(true)}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={{marginHorizontal: 20, fontSize: 18, color: COLORS.black}}>Antécédents gynécologie obstetrique</Text>
                </View>
                <View>
                    <Image source={require('../../assets/chevron-right.png')} />
                </View>
            </TouchableOpacity>
            <Line/>
          </View>
        </ProgressStep>
        <ProgressStep label="Etape 4" nextBtnText='Suivant' nextBtnTextStyle={buttonTextStyle}  previousBtnTextStyle={previousBtnText}>
          <View style={styles.stepContent}>
             {/* Examen clinique start  */}
          <View style={{margin: 10}}>
                <Text style={styles.label}>Examen clinique</Text>
                <View style={{ flex: 1,backgroundColor: '#bce4f5', borderRadius: 10}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez votre texte ici ..."
                        secureTextEntry={true}
                        value={step4Data.examenClinique}
                        onChangeText={text => setStep4Data({ ...step4Data, examenClinique: text })}
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
            {/* Examen clinique end  */}
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <View 
                    style={{
                        backgroundColor: COLORS.white, 
                        borderRadius: 25, 
                        width: 40, 
                        height: 40, 
                        justifyContent: "center", 
                        alignItems: "center", 
                        margin: 10, 
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3,}}
                >
                    <Icon
                        size={25}
                        name="plus"
                        pack="material"
                        color="#bce4f5"
                    />
                </View>
                <Text style={{fontSize: 16, fontWeight: "bold"}}>Ajouter un fichier</Text>
            </View>
            {/*Hypothèse de diagnostic  start  */}
            <View style={{margin: 10}}>
                <Text style={styles.label}>Hypothèse de diagnostic </Text>
                <View style={{ flex: 1,backgroundColor: '#bce4f5', borderRadius: 10}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez votre texte ici ..."
                        secureTextEntry={true}
                        value={step4Data.hypotheseDiagnostic}
                        onChangeText={text => setStep4Data({ ...step4Data, hypotheseDiagnostic: text })}
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
            {/*Hypothèse de diagnostic  end  */}
            {/* Examen paraclinique  start  */}
            <View style={{margin: 10}}>
                <Text style={styles.label}>Examen paraclinique </Text>
                <View style={{ flex: 1,backgroundColor: '#bce4f5', borderRadius: 10}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez votre texte ici ..."
                        secureTextEntry={true}
                        value={step4Data.examenParaclinique}
                        onChangeText={text => setStep4Data({ ...step4Data, examenParaclinique: text })}
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
            {/* Examen paraclinique  end  */}
          </View>
        </ProgressStep>
        <ProgressStep label="Etape 5" nextBtnText='Suivant' nextBtnTextStyle={buttonTextStyle}  previousBtnTextStyle={previousBtnText}>
            <View style={styles.stepContent}>
                {/* Diagnostic retenu  start  */}
                <View style={{margin: 10}}>
                    <Text style={styles.label}>Diagnostic retenu </Text>
                    <View style={{ flex: 1,backgroundColor: '#bce4f5', borderRadius: 10}}>
                        <TextInput
                            style={styles.input}
                            placeholder="Entrez votre texte ici ..."
                            secureTextEntry={true}
                            value={step5Data.diagnosticRetenu}
                            onChangeText={text => setStep5Data({ ...step5Data, diagnosticRetenu: text })}
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
                {/* Diagnostic retenu  end  */}
                <View style={{flexDirection: "row", backgroundColor: "#bce4f5", alignItems: "center", margin: 10, padding: 10, borderRadius: 5}}>
                    <Image source={require('../../assets/traitement.png')} />
                    <Text style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>Traitement</Text>
                </View>
                <View style={{margin: 10}}>
                    <Text style={{color: COLORS.black, fontSize: 14, fontWeight: "bold"}}>Paracétamol</Text>
                    <Text style={{fontSize: 12}}>Depuis le 17 avril 2024</Text>
                    <Text style={{fontSize: 12}}>2 cachets par jour, matin et soir</Text>
                </View>
                <Line/>
                <View style={{margin: 10}}>
                    <Text style={{color: COLORS.black, fontSize: 14, fontWeight: "bold"}}>Paracétamol 1g</Text>
                    <Text style={{fontSize: 12}}>Depuis le 04 décembre 2023</Text>
                    <Text style={{fontSize: 12}}>2 cachets par jour, matin et soir</Text>
                </View>
            </View>
        </ProgressStep>
        <ProgressStep label="Etape 6" nextBtnTextStyle={previousBtnText}  previousBtnTextStyle={previousBtnText}>
            <View style={{margin: 10}}>
              <Text style={{fontSize: 18, fontWeight: "bold", color: COLORS.black}}>Résumé de consultation</Text>
              <View style={{margin: 10, flexDirection: "row", justifyContent: "space-between"}}>
                <View style={{margin: 10, flexDirection: "row"}}>
                  <View>
                    <Image source={require('../../assets/resume.png')} />
                  </View>
                  <View style={{marginHorizontal: 10, justifyContent: "center"}}>
                    <Text style={{fontSize: 20, color: COLORS.black, fontWeight: "bold"}}>{step1Data.name}</Text>
                    <Text style={{fontSize: 14}}>{step1Data.age} ans</Text>
                    <Text style={{fontSize: 14}}>{step1Data.taille} cm</Text>
                    <Text style={{fontSize: 14}}>{step1Data.poids} Kg</Text>
                  </View>
                </View>
                <View style={{justifyContent: "flex-end", alignItems: "flex-end"}}>
                  <Text>
                    <Text>Heure:</Text>
                    <Text style={{fontWeight: "bold", color: COLORS.black}}>  10:39</Text>
                  </Text>
                  <Text>
                    <Text>Date:</Text>
                    <Text style={{fontWeight: "bold", color: COLORS.black}}>  {step1Data.date}</Text>
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
                <View style={{ flexDirection: "row"}}>
                  <View>
                    <Text style={{textAlign: "center"}}>IMC (kg/mm)</Text>
                    <Text style={{color: COLORS.black, fontWeight: "bold", textAlign: "center"}}>{step1Data.imc}</Text>
                  </View>
                </View>
                <LineRight/>
                <View style={{ flexDirection: "row"}}>
                  <View>
                    <Text style={{}}>Température</Text>
                    <Text style={{color: COLORS.black, fontWeight: "bold", textAlign: "center"}}>{step1Data.temperature}</Text>
                  </View>
                </View>
                <LineRight/>
                <View style={{ flexDirection: "row"}}>
                  <View>
                    <Text style={{textAlign: "center"}}>TA (mmHg)</Text>
                    <Text style={{color: COLORS.black, fontWeight: "bold", textAlign: "center"}}>{step1Data.ta}</Text>
                  </View>
                </View>
                <LineRight/>
                <View style={{ flexDirection: "row"}}>
                  <View>
                    <Text style={{textAlign: "center"}}>Fc</Text>
                    <Text style={{color: COLORS.black, fontWeight: "bold", textAlign: "center"}}>{step1Data.fc} bpm</Text>
                  </View>
                </View>
              </View>
              <View style={{margin: 10}}>
                <Text style={{backgroundColor: COLORS.button.principal, width: 200, textAlign: "center", padding: 10, borderRadius: 10, color: COLORS.white, marginBottom: 10, fontWeight: "bold", fontSize: 16}}>Motif de consultation </Text>
                <Text>{step2Data.motifConsultation}</Text>
              </View>
              <View style={{margin: 10}}>
                <Text style={{backgroundColor: COLORS.medecin_red, width: 200, textAlign: "center", padding: 10, borderRadius: 10, color: COLORS.white, marginBottom: 10, fontWeight: "bold", fontSize: 16}}>Antécédents </Text>
                <Text>Mlle Tatiana est une femme de 30 ans qui consulte pour une toux persistante depuis 3 semaines. La toux est sèche et quinteuse, et elle est plus fréquente la nuit. Mlle Tatiana n'a pas de fièvre, ni de difficultés respiratoires. Il n'a pas d'antécédents de maladies pulmonaires.</Text>
              </View>
              <View style={{margin: 10}}>
                <Text style={{backgroundColor: COLORS.medecin_green, width: 200, textAlign: "center", padding: 10, borderRadius: 10, color: COLORS.white, marginBottom: 10, fontWeight: "bold", fontSize: 16}}>Diagnostic </Text>
                <Text>{step5Data.motifConsultation}</Text>
              </View>
              <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", margin: 10, padding: 10}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image source={require('../../assets/document.png')} />
                    <View>
                        <Text style={{marginHorizontal: 20, fontSize: 18, color: COLORS.black, fontWeight: "bold"}}>Prescription</Text>
                        <Text style={{marginHorizontal: 20, fontSize: 14, borderBottomWidth: 0.5}}>Voir liste de prescription </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <Button
            onPress={() => navigation.navigate("ConsultationList")}
              title="Consultation suivante"
              style={styles.signUpBtn}
              textStyle={styles.signUpBtnTxt}
            />
            </View>
        </ProgressStep>
      </ProgressSteps>
    
      </ScrollView>
      {/* modal mode de vie start  */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modeVieModalVisible}
        onRequestClose={() => {
          setModeVieModalVisible(!modeVieModalVisible);
        }}>
            <ModalModeVie onPress={() => setModeVieModalVisible(false)} onPressRetour={() => setModeVieModalVisible(false)}/>
      </Modal>
        {/* modal mode de vie end  */}
        {/* modal antecedent personnel start  */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={antecedentPersoModalVisible}
        onRequestClose={() => {
          setAntecedentPersoModalVisible(!antecedentPersoModalVisible);
        }}>
            <ModalAntecedentPerso onPress={() => [setAjoutAntecedentPersoModalVisible(true)]} onPressRetour={() => setAntecedentPersoModalVisible(false)}/>
      </Modal>
      {/* modal antecedent personnel end  */}
      {/* modal Ajout antecedent personnel start  */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={ajoutAntecedentPersoModalVisible}
        onRequestClose={() => {
          setAjoutAntecedentPersoModalVisible(!ajoutAntecedentPersoModalVisible);
        }}>
            <ModalAjoutAntecedentPerso onPress={() => setAjoutAntecedentPersoModalVisible(false)} onPressRetour={() => setAjoutAntecedentPersoModalVisible(false)}/>
      </Modal>
      {/* modal Ajout antecedent personnel end  */}
         {/* modal  antecedent familial start  */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={antecedentFamilialModalVisible}
        onRequestClose={() => {
          setAntecedentFamilialModalVisible(!antecedentFamilialModalVisible);
        }}>
            <ModalAntecedentFamilial onPress={() => setAjoutAntecedentFamilialModalVisible(true)} onPressRetour={() => setAntecedentFamilialModalVisible(false)}/>
      </Modal>
      {/* modal  antecedent familial end  */}
        {/* modal Ajout antecedent familial start  */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={ajoutAntecedentFamilialModalVisible}
        onRequestClose={() => {
          setAjoutAntecedentFamilialModalVisible(!ajoutAntecedentFamilialModalVisible);
        }}>
            <ModalAjoutAntecedentFamilial onPress={() => setAjoutAntecedentFamilialModalVisible(false)} onPressRetour={() => setAjoutAntecedentFamilialModalVisible(false)}/>
      </Modal>
      {/* modal Ajout antecedent familial end  */}
      {/* modal  antecedent chirurgicaux start  */}
               <Modal
        animationType="slide"
        transparent={true}
        visible={antecedentChirurgicauxModalVisible}
        onRequestClose={() => {
          setAntecedentChirurgicauxModalVisible(!antecedentChirurgicauxModalVisible);
        }}>
            <ModalAntecedentChirurgicaux onPress={() => setAjoutAntecedentChirurgicauxModalVisible(true)} onPressRetour={() => setAntecedentChirurgicauxModalVisible(false)}/>
      </Modal>
      {/* modal  antecedent chirurgicaux end  */}
      {/* modal Ajout antecedent chirurgicaux start  */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={ajoutAntecedentChirurgicauxModalVisible}
        onRequestClose={() => {
          setAjoutAntecedentChirurgicauxModalVisible(!ajoutAntecedentChirurgicauxModalVisible);
        }}>
            <ModalAjoutAntecedentChirurgicaux onPress={() => setAjoutAntecedentChirurgicauxModalVisible(false)} onPressRetour={() => setAjoutAntecedentChirurgicauxModalVisible(false)}/>
      </Modal>
      {/* modal Ajout antecedent chirurgicaux end  */}
      {/* modal  antecedent Gyneco-Obstetrie start  */}
            <Modal
        animationType="slide"
        transparent={true}
        visible={antecedentGynecoObstetrieModalVisible}
        onRequestClose={() => {
          setAntecedentGynecoObstetrieModalVisible(!antecedentGynecoObstetrieModalVisible);
        }}>
            <ModalAntecedentGynecoObstetrie onPress={() => setAjoutAntecedentGynecoObstetrieModalVisible(true)} onPressRetour={() => setAntecedentGynecoObstetrieModalVisible(false)}/>
      </Modal>
      {/* modal  antecedent Gyneco-Obstetrie end  */}
      {/* modal Ajout antecedent Gyneco-Obstetrie start  */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={ajoutAntecedentGynecoObstetrieModalVisible}
        onRequestClose={() => {
          setAjoutAntecedentGynecoObstetrieModalVisible(!ajoutAntecedentGynecoObstetrieModalVisible);
        }}>
            <ModalAjoutAntecedentGynecoObstetrie onPress={() => setAjoutAntecedentGynecoObstetrieModalVisible(false)} onPressRetour={() => setAjoutAntecedentGynecoObstetrieModalVisible(false)}/>
      </Modal>
      {/* modal Ajout antecedent Gyneco-Obstetrie end  */}
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
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.button.principal,
  },
  signUpBtnTxt: {
    fontSize: 18,
    top: -3,
  },
});

export default ConsultationForm;
