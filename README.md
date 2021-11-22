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

React Native Paperに用意されたコンポーネント
・ActivityIndicator 円状のUIで読み込み中を示す
・Appbar ヘッダーを表示する（フッターにもできる）
・Avatar アイコンを表示する
・Badge 任意のビューの右上にバッジを表示する
・Banner 画面上部から現れるメッセージエリアを表示する
・BottomNavigation 下タブメニューを表示する
・Button ボタンを表示する
・Card カードを表示する
・Chip ツールチップを表示する
・DataTable 表を表示する
・Dialog ダイアログを表示する
・Divider 分割線を表示する
・Drawer ドロワー内のメニューを表示する（左端への出し入れは実装しない）
・FAB FloatingAction Button(右上の丸ボタン)を表示する
・HelperText 主にTextInputと併用して、入力欄の下にエラーメッセージ等を表示する
・IconButton アイコンだけのボタンを表示する
・TouchableRipple タップ時の波紋が広がる演出（リップルエフェクト）を表示する
・List リストを表示する
・Menu メニューを表示する
・Modal 画面にオーバーレイする領域を表示する（Dialogの要素技術）
・Portal 本来のビューツリーとは違う場所にビューを表示する（Modalの要素技術）
・ProgressBar 横棒のUIで処理待ちを示すSearchbar検索欄を表示する
・Searchbar 検索欄を表示する
・Snackbar 下からポップアップするメッセージを表示する
・Surface Material Designが定義する「紙」の概念を再現する（浮いているUIの要素技術）
・Switch スイッチを表示する
・TextInput テキスト入力欄を表示する
・ToggleButton トグル（切り替え）できるボタンを表示する

# React Native Paperをインストールする
・npmでインストールする
$ npm install react-native-paper
・babel.config.jsを修正する(修正内容は実際に参照)

# 画面遷移のライブラリ
・React Navigation
・React Native Navigation
・React Router Native

# React Navigationの3つの遷移
・コンポーネント切り替え機能を持つコアライブラリ
・画面遷移のUIやアニメーションを担当する補助ライブラリ群
 ・stack 左右にスライドしながら画面を切り替える
 ・tabs タブを選択することで画面を切り替える
 ・drawer 画面端から現れるサイドメニューで画面を切り替える

# React Native Navigationの利用
・コアライブラリをインストールする
$ npm install @react-navigation/native

・続いて、React Navigationが依存している、アニメーションやジェスチャーを扱うためのライブラリをインストールする
依存ライブラリをインストールする
$ expo install react-native-gesture-handler
react-native-reanimated react-native-screens
react-native-safe-area-context
@react-native-community/masked-view

# Stack Navigator 普通の画面遷移を扱う
Stack Navigatorをインストールする
$ npm install @react-navigation/stack

# Tab Navigatorでタブ切り替えを扱う
Tab Navigatorをインストール
$ npm install @react-navigation/buttom-tabs

# Drawer Navigatorでサイドメニューを扱う
$ npm install @react-navigation/drawer

・navigation.openDrawer() サイドメニューを開く
・navigation.closeDrawer() サイドメニューを閉じる
・navigation.toggleDrawer() 開閉状態をトグルする

ここまで1~9章
----------------------------------------------
ここから10章

メモアプリを作る




# React Nativeでデータを保存する方法
・通信を行い、データをサーバーに保存する
・ローカル領域の簡易ストレージ(AsyncStorage)に保存する
・SQLiteなどのアプリ内データベースに保存する

AsyncStorageというAPI
Key-Valueストア
$ expo install @react-native-async-storage/async-storage

---------------------------------------------

# 作ったプロジェクトをリリースする！
# Androidアプリをリリースするまでの流れ
手元のソースコードを.apkまたは.aabという拡張子のアプリファイルにまとめてからアップロードする
・Google Playに開発者として登録する(初回のみ25ドルかかる)
・Play Console(管理画面)でストア向けの掲載情報を作成、入力する
・アプリファイルをアップロードする
https://support.google.com/googleplay/androiddeveloper/answer/6112435

# iOSアプリをリリースするまでの流れ
手元のソースコードを.ipaという拡張子のアプリファイルにまとめてからアップロードする
・Apple Developer Programに登録する（1年ごとに99ドルかかる）
・デベロッパーアカウントサービスでAppleIDを登録する
・AppStoreConnectでストア向けの掲載情報を作成、入力する
・アプリファイルをアップロードする
・審査を受ける
・審査が通ったらアプリを公開する
https://developer.apple.com/jp/programs/howitworks/

デベロッパアカウントヘルプ
https://help.apple.com/developeraccount/?lang=ja

AppStoreConnectヘルプ
https://help.apple.com/appstoreconnect/?lang=ja

# Expoでリリースビルドを行う流れ
Expo CLIを使うと、手元のマシンにAndroid SDKやiOS SDKをセットアップしていなくても、リリースビルドを実施できる

リリースビルドはクラウドサービスが行ってくれる
クラウドサービスにアップロードすると、ダウンロードリンクが発行され、apkファイルやipaファイルなどのアプリファイルがダウンロードできるようになる

app.jsonで色々設定する
・アプリ名
・アプリID
同名のアプリが複数あった場合にもストア内でアプリを識別するためのもの
慣例として、「開発者が所有しているドメインの逆順+アプリ名」で命名する
iOSは、ハイフンは使える、アンダースコアは使えない
Androidは、ハイフンは使えない、アンダースコアは使える

・アプリバージョン
ストアに表記するためのバージョンと、ストアの内部で機械的に管理する際に使われるバージョンの２種類がある

・アプリアイコン
アプリの顔

・スプラッシュ画面
アプリの起動時に表示されるスプラッシュ画面

app.jsonの例
{
    "expo": {
        "name": "サンプルアプリ", //アプリ名
        "ios": {
            "bundleIdentifier": "info.nkzn.my-awesome-timer",
            "buildNumber": "1030023",
            "icon": "./assets/icon.png" //アイコン
        },  //iOS向けのアプリID
        "android": {
            "package": "info.nkzn.my_awesome_timer",
            "versionCode": 1030023,
            "icon":"./assets/icon.png","adaptiveIcon": {
                "foregroundImage":"./assets/ic_launcher_foreground.png",
                "backgroundColor":"#FFFFFF"
            },
        },  //Android向けのアプリID
        "version": "1.3.0",  //アプリバージョン
        "splash":{
            "image":"./assets/splash.png",
            "resizeMode":"cover",
            "backgroundColor":"#FFFFFF"
        },
    }
}

画像リソースを準備する
アプリアイコンとスプラッシュ画面の２種類を最低限用意する

ExpoCLIでプロジェクトを作成すると、
プロジェクトのトップレベル階層に
/assetsというフォルダが作られる

icon.pngがアプリアイコン
splash.pngがスプラッシュ画面

iOS向けアイコンの要点
・png形式であること
・1024 * 1024px
・Appleのヒューマンインターフェースガイドラインに沿ったデザインであること

Android向けアイコンの要点
・png形式であること
・Android8.0以降で有効なアダプティブアイコンについてのガイドラインに沿ったデザインであること
・512 * 512ピクセル以上
・アダプティブアイコン用のリソースと通常アイコンのリソースをそれぞれ用意すること


Androidアプリのビルド：
$ expo build:android

iOSアプリのビルド：
$ expo build:iOS
