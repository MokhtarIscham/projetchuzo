import React from 'react';
import { View, Text, Button, FlatList,StatusBar,Image, StyleSheet,ScrollView } from 'react-native';
import {useTheme} from '@react-navigation/native';
import {data} from '../model/data';
import Swiper from 'react-native-swiper';


const RafaScreen = ({navigation}) => { 
    const theme = useTheme();
        return (
            <ScrollView style={styles.container}>
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

                <View>
                    <Text style={[styles.container, style={
                        textAlign:'center',
                        fontFamily:'Times New Roman',
                        fontWeight:'bold',
                        fontSize: 25,
                        justifyContent:'center',
                        padding: 10,
                        }]}>
                        Biografía de Rafael María García Orozco
                    </Text>

                    <View>
                        <Text>
                        Rafael María García Orozco nació en la ciudad de Santiago de Cali un 25 de julio de 1949 en el barrio San Pascual Bailón, desde muy pequeño sintió inclinación por la música popular. Participó por Colombia en el XXXIII Coloquio Internacional Boleros de Oro realizado en la Habana –Cuba- en el año 2010, invitado por la Unión de Escritores y Artistas de Cuba “UNEAC”. Escritor de 4 libros sobre las vivencias musicales de nuestro entorno territorial: “Recuerdos del Chuzo de Rafa, una bohemia inolvidable”, “Ferias de Cali, una memoria musical contada”, “Bailémonos un Bolero” y “La música del Valle del Pacífico en cuatro tiempos” seleccionada por la Convocatoria “Estímulos 2015” de la Secretaría de Cultura y Turismo Municipal de Santiago de Cali y con la aprobación del Fondo Mixto de promoción de la Cultura y las Artes del Valle del Cauca
                        </Text>
                    
                
                        
                            <View
                                maxHeight={500}>
                                <View> 
                                    <Image
                                        source={require('../assets/banners/RAFA_CON_CREDENCIAL_DE_ERIODISTA.jpg')}
                                        resizeMode="cover"
                                        style={styles.sliderImage}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text>
                                Autor de los libros “RECUERDOS DEL CHUZO DE RAFA, UNA MEMORIA INOLVIDABLE” editado por Feriva, Cali, “BAILÉMONOS UN BOLERO”, “FERIAS DE CALI, UNA MEMORIA MUSICAL CONTADA” editados personalmente en el barrio San Nicolás de Cali y “LA MÚSICA DEL VALLE DEL PACÍFICO EN CUATRO TIEMPOS” ganador de la beca ESTÍMULOS a la Cultura de Santiago de Cali, de la Secretaría de Cultura y Turismo municipal y el Fondo Mixto de Promoción de la Cultura y las Artes del Valle del Cauca.
                                </Text>

                                <View style={styles.sliderContainer}>
                                    <View height={200}>
                                            <Image
                                            source={require('../assets/banners/RAFA_MELÓMANO.jpg')}
                                            resizeMode="cover"
                                            style={styles.sliderImage}
                                            />
                                    </View>
                                </View>
                                <Text>Es considerado como un Maestro Artesano, investigador de las materias primas que se dan en esta extensa zona del Valle del Pacífico para su transformación en Artesanías Utilitarias para el hogar y para la Joyería Artesanal, con el aval de Parquesoft Pacífico y de la Institución Universitaria Antonio José Camacho, destacándose como el primer ganador de la beca “Estímulos 2016” en Creación Artesanal, convirtiéndose en un transmisor de todos estos saberes naturales logrando crear una red de producción y comercialización Artesanal con diseños de región propios.
                                    Hizo parte del comité de la Cadena Productiva de la Guadua en el Dpto. del Valle Del Cauca, participo en las mesas de consulta para las normas técnicas que está efectuando el ICONTEC para culmos de guadua “Angustifolia kunt” y con una experiencia de más de 30 años como artesano de la guadua.
                                    Con el grupo de Gestión Empresarial Sostenible de la Corporación Autónoma Regional del Valle del Cauca dicté capacitaciones de artesanía con guadua; con una intensidad de 120 horas cada una y con la interventoría del Dr. Edwin Jacobo Guittis, coordinador del grupo “G.E.S” Funcionario de la C.V.C. En los municipios de Florida, Yumbo, Jamundí, Bugalagrande, Bolívar, Rio Frio y en Santiago de Cali con la interventoría del Centro de Atención Local Integrado, CALI 5 y con la interventoría del Instituto Popular de Cultura de Cali, I.P.C. Estudiante de los Talleres de literatura creados por la Red de Escritura (RELATA) en la Universidad Santiago de Cali. Desde 2008, hasta el año 2013 dictados por el escritor Harold Kremer en la biblioteca del Universidad.
                                </Text>
                            </View>
                    
            
                            <View style={styles.sliderContainer} maxHeight={500}>
                                <View> 
                                    <Image
                                    source={require('../assets/banners/RAFA_VENDIENDO_SUS_LIBROS.jpg')}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                    />
                                </View>
                        </View>
                        <Text>
                            Coordinador del I, II, III, IV y V Encuentro Académico Internacional del Bolero en Colombia organizado en el municipio de Caicedonia, los años 2011, 2012 y 2013, 2014 y 2015, en compañía del Lic. Perucho Mejía y la Dra. Patricia Rebellón.
                            Charlas Audiciones cada mes, a partir del año 2014 en distintos espacios del departamento del Valle del Cauca, sobre nuestra memoria musical.
                            
                            Rafael María García Orozco
                        </Text>
                    </View>
                    
                    

                </View>
            </ScrollView>           
        );
};

export default RafaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '90%',
    alignSelf: 'center'
  },
  sliderContainer: {
    width:'80%',
    textAlign:'center'
    },

  sliderImage: {
    maxHeight:'100%',
    maxWidth:'100%'
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      cardImgWrapper: {
        flex: 1,
      },
      cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
      cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
      },
      cardDetails: {
        fontSize: 12,
        color: '#444',
      },
      cardsWrapper: {
        marginTop: 20,
        width: '90%',
      },
    });
