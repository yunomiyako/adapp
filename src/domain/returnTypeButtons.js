import TypeSelectionButtonFactory from "./TypeSelectionButtonFactory"

var returnTypeButtons = new TypeSelectionButtonFactory()
returnTypeButtons.addButton("textAndImage" ,"テキスト\n+\n画像"  ,  "文章と画像で感謝の意を示しましょう" , false)
returnTypeButtons.addButton("textOnly" , " \nテキストのみ！\n "  , "たくさん文字を書けます。秘密の話を書いてください。" , false)
returnTypeButtons.addButton("premium" , "プレミアム\n会員限定"  , "テキストも画像も動画も音声も埋め込み放題" , true)

export default returnTypeButtons.buttons
