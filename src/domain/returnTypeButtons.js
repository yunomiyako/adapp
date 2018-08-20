import TypeSelectionButtonFactory from "./TypeSelectionButtonFactory"

var returnTypeButtons = new TypeSelectionButtonFactory()
returnTypeButtons.addButton("textAndImage" ,"テキスト&画像"  ,  "文章と画像で感謝の意を示しましょう" , "file image" , "" , false)
returnTypeButtons.addButton("textOnly" , "テキストのみ！"  , "たくさん文字を書けます。秘密の話を書いてください。"  , "image" , "" ,  false)
returnTypeButtons.addButton("premium" , "画像ガチャ"  , "画像のガチャを作成できます。宣伝してくれた人は１回無料で引くことができます。"  , "random"  , "プレミアム会員限定" , true)
returnTypeButtons.addButton("lottery" , "抽選"  , "当選確率や当選人数を設定できます"  , "random"  , "プレミアム会員限定" , true)

export default returnTypeButtons.buttons
