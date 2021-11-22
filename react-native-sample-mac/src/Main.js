import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Card, Headline, Paragraph, Subheading, Title } from 'react-native-paper';

export const Main = () => {
    return (
        <SafeAreaView>
            <Headline>Paper紹介</Headline>
            <Title>タイトル</Title>
            <Subheading>これが段落です</Subheading>
            <Paragraph>じゅげむじゅげむ ごこうのすりきれ</Paragraph>
            {/* <Caption>キャプションもかけます</Caption> */}
            <Subheading>Button</Subheading>
            <Subheading>Card</Subheading>
            
            <Button style={{width: 100, borderRadius: 12}}>ふつうのボタン(mode:text)</Button>
            <Button mode="contained" style={{width: 100, borderRadius: 12}}>containedなボタン</Button>
            <Button mode="outlined" style={{width: 100, borderRadius: 12}}>outlinedなボタン</Button>
            

            
            
            <ScrollView>
                {}
            </ScrollView>
        </SafeAreaView>  
    );
};