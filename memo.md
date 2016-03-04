# postmessage
通常、異なったページ間のクロスドメイン通信は同一ホスト、同一ポート、同一プロトコルの場合にのみ行える

<データを送信する主体(windowおブジェクト)>.postMessage(<データ(任意の型)>,<送信先ドメイン>)
送信先のoriginの指定、"*"で無効にできる*

parentにaddEventListnerで"message"で関数を追加
iframe内からparent.postMessageをすると親に対してメッセージが送れる
- 参考)http://d.hatena.ne.jp/bannyan/20090820/1250789189


個人的にはcomponentが持った方が良い物も全てstoreで管理した方が良いと考えます(特定のコンポーネントでしか使わない物もpropで渡す形式にする)

理由としては見通し良くなること、コンポーネントが全てステートレスである方がテスタビリティが高まる事があると思います

iframe外に出すのはwindow.parent.postmessage

postmessageで送れるのは文字列のみ

