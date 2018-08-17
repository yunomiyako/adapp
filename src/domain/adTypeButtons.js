import TypeSelectionButtonFactory from "./TypeSelectionButtonFactory"

var adTypeButtons = new TypeSelectionButtonFactory()
adTypeButtons.addButton("tweet" , "ツイートしてもらう"  ,  "あなたが宣伝してほしいことをツイートしてもらえます。"  , "share" ,"Twitterのログインが必要です" , false)
adTypeButtons.addButton("retweet" , "リツイートしてもらう"  , "宣伝してほしいツイートをリツイートしてもらえます。" , "retweet" , "Twitterのログインが必要です" , false)
adTypeButtons.addButton("follow" , "フォローしてもらう"  , "あなたのアカウントをフォローしてもらえます。" , "child" , "準備中" , false)
adTypeButtons.addButton("fav" , "いいねしてもらう"  , "あなたのツイートをいいねしてもらって、盛り上がっているように見えます！"  , "heart" , "準備中" , false)
adTypeButtons.addButton("lookMe" , "見てもらう"  , "ただ見てほしいことを文章と画像で表現しよう"  ,"eye" , "" , false)

export default adTypeButtons.buttons
