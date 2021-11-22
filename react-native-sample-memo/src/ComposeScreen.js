import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
import { save } from './store';

export const ComposeScreen = () => {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    
    const onPressSave = async () => {
        await save(text, Date.now());
        navigation.goBack();
    };
    
    return (
        <KeyboardAvoidingView
          style={{ marginBottom: 16 }}
        >
            <TextInput
            mode="outlined"
            placeholder="メモを入力してください"
            multiline
            onChangeText={(text) => setText(text)}
            ></TextInput>
            <Button
            mode="contained"
            onPress={onPressSave}
            >保存</Button>
        </KeyboardAvoidingView>
        
        // <View style={styles.container}>
        //     <Text>メモ作成画面</Text>
        // </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})