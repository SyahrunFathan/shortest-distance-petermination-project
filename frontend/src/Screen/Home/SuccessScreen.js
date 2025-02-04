import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, ILTaskIcon} from '../../Assets';

const SuccessScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        <Image source={ILTaskIcon} style={{width: 80, height: 80}} />
        <View>
          <Text
            style={{
              color: COLORS.black,
              textAlign: 'center',
              fontSize: 24,
              fontWeight: '400',
            }}>
            Yeahh Berhasil
          </Text>
          <Text style={{color: COLORS.grey, textAlign: 'center'}}>
            Pengantaran Darah Anda Selesai!
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace('Main')}
        style={{
          paddingVertical: 8,
          backgroundColor: COLORS.primary,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: COLORS.white, fontWeight: '600'}}>
          Go Back Home
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SuccessScreen;
