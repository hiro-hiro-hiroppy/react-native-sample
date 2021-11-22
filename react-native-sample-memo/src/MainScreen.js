import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
import { List, FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
import format from 'date-fns/format';
import { loadAll } from './store';

const memos = [
    {
        text: 'メモメモメモ',
        createdAt: 1585574700000, 
        //2020.03.30 22:25
    },
    {
        text: "メモメモメモ",
        createdAt: 1585567500000,
        //2020.03.30 20:25
    },
    {
        text:"長いメモメモメモメモメモメモメモメモメモメモメモメモメモメモ",
        createdAt:1585459500000,
        //2020.03.29 14:25
    },
    {
        text:"メモメモメモ",
        createdAt:1585369500000,
        //2020.03.28 13:25
    },
    {
        text:"メモメモメモ",
        createdAt:1585275900000,
        //2020.03.27 11:25
    }, 
]

export const MainScreen = () => {
    const navigation = useNavigation();
    const [memos, setMemos] = useState([]);
    
    useEffect(() => {
        const initialize = async () => {
            const newMemos = await loadAll();
            setMemos(newMemos);
        }
        
        const unsubscribe = navigation.addListener('focus', initialize);
        
        return unsubscribe;
    }, [navigation]);
    
    const onPressAdd = () => {
        navigation.navigate('Compose');
    }
    
    return (
        <View style={styles.container}>
            <FlatList
            style={styles.list}   
            data={memos}
            keyExtractor={item => `${item.createdAt}`}
            renderItem={({item}) => (
            <List.Item
                title={item.text}
                titleNumberOfLines={5}
                description={`作成日時: ${format(item.createdAt, 'yyyy.MM.dd HH:mm')}`}
                descriptionStyle={{ textAlign: 'right'}}
            ></List.Item>
            )}
            ></FlatList>
            <FAB 
              style={{
                  position: 'absolute',
                  right: 16,
                  bottom: 16,
              }}
              icon="plus"
              onPress={onPressAdd}
            ></FAB>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    list: {
        flex: 1,
    },
  });