import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';

const HomeScreen = ({navigation}) => {
  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      
        <Text style={[styles.container, style={
          textAlign:'center',
          fontFamily:'Times New Roman',
          fontWeight:'bold',
          fontSize: 25,
          justifyContent:'center',
          padding: 10,
          }]}>
            BIENVENIDO AL CENTRO CULTURAL CHUZO DE RAFA
        </Text>
      
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          >
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/RAFA_VENDIENDO_SUS_LIBROS.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/RAFA_MELÓMANO.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/RAFA_CON_CREDENCIAL_DE_ERIODISTA.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Events'})
          }>
          <View style={styles.categoryIcon}>
            <MaterialIcons
              name="event"
              size={35}
              color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Events</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => 
          navigation.navigate('ZoomLink',  {title: 'ZoomLink'})
          }>
          <View style={styles.categoryIcon}>
            <FontAwesome name="play" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Zoom</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Las Artesanias'})
          }>
          <View style={styles.categoryIcon}>
            <FontAwesome name="gears" size={35} color="#FF6347"
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Las artesanias</Text>
        </TouchableOpacity>       
      </View>

      <View style={[styles.categoryContainer, {marginTop: 10}]}>
      <TouchableOpacity style={styles.categoryBtn} onPress={() => 
          navigation.navigate('RafaScreen',  {title: 'Biographie'})
          }>
          <View style={styles.categoryIcon}>
            <FontAwesome name="user" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Who is Rafa ?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => 
          navigation.navigate('RafaScreen',  {title: 'Biographie'})
          }>
          <View style={styles.categoryIcon}>
            <FontAwesome name="user" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Who is Rafa ?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => 
        navigation.navigate('NelsonScreen',  {title:'Biographie1'})
        }>
          <View style={styles.categoryIcon}>
          <FontAwesome name="user" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Nelson </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.cardsWrapper}>
      <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}
        >JOIN US
      </Text>
      <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/Zoom.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View  style={[styles.container, style={
          textAlign:'center',
          fontFamily:'Times New Roman',
          fontWeight:'bold',
          fontSize: 25,
          justifyContent:'center',
          padding: 10,
          }]}>
            <Text style={styles.cardTitle} onPress={() => 
          navigation.navigate('ZoomLink',  {title: 'ZoomLink'})
          }>EVENTO MUSICAL TODOS LOS SABADOS CULTURALES CON MUSICA Y  ALEGRIAt</Text>
          </View>
        </View>

      </View>



      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Recently Events
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/RAFA_VENDIENDO_SUS_LIBROS.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>DOMINGO DEL POEMA</Text>
            
            <Text style={styles.cardDetails}>
              cliquez pour voir la liste de cet évènement
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/RAFA_MELÓMANO.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>ENCUENTRO DE MELOMANO</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              description 
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/RAFA_CON_CREDENCIAL_DE_ERIODISTA.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>SABADO DE MUSICA</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
               description 
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 500,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
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
  cardImgWrapper1: {
    flex: 3,
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
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
