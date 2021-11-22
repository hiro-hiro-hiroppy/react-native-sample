# react-native-sample

# プロジェクトの始め方

1. Expoをインストールする
$ npm install -g expo-cli

2. Expoコマンドでプロジェクトをセットアップする
$ expo init my-first-react-native-app(プロジェクト名)




代表的なコンポーネント
・View レイアウトの基本単位
・Text テキストを表示・装飾する
・ActivityIndicator 処理待ちを表すインジケーター
・FlatList 配列データを省メモリで表示する
・ScrollView 内側のコンテンツが画面をはみ出たらスクロールする
・RefreshControl ScrollViewに引っ張って更新を付与する
・Pressable あらゆるビューにタップイベントを持たせる

代表的なAPI
・Alert 簡易なダイアログを表示する
・Dimensions アプリのウィンドウやデバイスのサイズを取得する
・Keyboard キーボードの表示・非表示を検知する 
・Animated ビューをアニメーションさせる 
・StyleSheet コンポーネントに適用するスタイルをまとめて管理する 
・Geolocation 現在地の緯度経度情報を取得 する（window.navigator.geolocationとして提供） 
・Fetch インターネットとの通信を行う（ window.fetchとして提供） 
・Console デバッグログを表示 する（window.consoleとして提供）
・Require NPMライブラリや別のファイルと定義されたCommonJSライブラリ

プロジェクト構成
assets/ アプリアイコンやスプラッシュ画像などのリソースを配置するフォルダ
.watchmanconfig デバッグ中の監視にwatchmanコマンドを利用する場合の設定ファイル
App.js Reactアプリケーションとしてのエントリーポイント
app.json アプリの設定を記述するファイル
babel.config.js Babelの設定ファイル


