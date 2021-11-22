//import { StatusBar } from 'expo-status-bar';
//import * as React from 'react';
// import { Provider as PaperProvider } from 'react-native-paper';
// import { StyleSheet, Text, View } from 'react-native';
// import { Main } from './src/Main';

//ナビゲーション--------------
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

//タブのナビゲーション----------
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//サイドメニュー---------------


//--------------------------
//--------------------------
//--------------------------


// export default function App() {
//   return (
//     <PaperProvider>
//       {}
//       <NavigationContainer>
//         {}
//       </NavigationContainer>
//       <Main></Main>
//     </PaperProvider>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// //画面遷移のサンプル
// function HomeScreen(){
//   const navigation = useNavigation();
  
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button title="詳細へ" onPress={() => navigation.navigate('Detail')}>ABC</Button>
//     </View>
//   )
// }

// function DetailScreen(){
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Detail Screen</Text>
//     </View>    
//   ) 
// }

// //StackNavigatorを生成する
// const Stack = createStackNavigator();

// export default function App(){
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} options={{title: 'ホーム'}}></Stack.Screen>
//         <Stack.Screen name="Detail" component={DetailScreen}></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

//タブによる画面遷移
const Tab = createBottomTabNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Settings" component={SettingScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

function HomeScreen(){
  return (
    <Text></Text>
  );
}

function SettingScreen(){
  return (
    <Text></Text>
  );
}
