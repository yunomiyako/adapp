import TypeSelectionButtonFactory from "./TypeSelectionButtonFactory"

var adTypeButtons = new TypeSelectionButtonFactory()
adTypeButtons.addButton("tweet" , "ツイート\nしてもらう"  ,  "あなたが宣伝してほしいことをツイートしてもらいます。" , false)
adTypeButtons.addButton("retweet" , "リツイート\nしてもらう"  , "宣伝してほしいツイートをリツイートしてもらいます。" , false)
adTypeButtons.addButton("lookMe" , "見てもらう\n　"  , "ただ見てほしい文章と画像を設定します。" , false)

export default adTypeButtons.buttons
