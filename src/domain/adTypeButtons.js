import TypeSelectionButtonFactory from "./TypeSelectionButtonFactory"

var adTypeButtons = new TypeSelectionButtonFactory()
adTypeButtons.addButton("ツイート\nしてもらう"  ,  "あなたが宣伝してほしいことをツイートしてもらいます。")
adTypeButtons.addButton("リツイート\nしてもらう"  , "宣伝してほしいツイートをリツイートしてもらいます。")
adTypeButtons.addButton("見てもらう\n　"  , "ただ見てほしい文章と画像を設定します。")

export default adTypeButtons.buttons
