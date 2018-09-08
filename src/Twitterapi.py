from twython import Twython, TwythonError
import tweepy
import glob
import random

class Twitter_Api:

    def __init__(self,accesstoken,secrettoken,adtype = None,sta = None,imagepass = None,tweetid = None,screen_id = None):
        self.twitter = Twython("yIw7ggh1RPJMiUfipmZllpfAF", "14i6GhCaqAyevnXAPiQBDqR1rZ7MpsQqNI0fFUi1Z1nOnpSrb6", accesstoken , secrettoken)
        auth = tweepy.OAuthHandler("yIw7ggh1RPJMiUfipmZllpfAF", "14i6GhCaqAyevnXAPiQBDqR1rZ7MpsQqNI0fFUi1Z1nOnpSrb6")
        auth.set_access_token(accesstoken, secrettoken)
        self.api = tweepy.API(auth)
        self.adtype = adtype
        
        if self.adtype == "tweet":
            self.tweet(sta,imagepass = imagepass)
        elif self.adtype == "retweet":
            self.post_retweet(tweetid)
        elif self.adtype == "fav":
            self.fav(tweetid)
        elif self.adtype == "follow":
            self.follow(screen_id)
        else:
            print("エラー")
    


    def tweet (self,sta,imagepass = None):

        if imagepass != None:
            photos = []
            responses = []
            medias = []

            images = glob.glob(imagepass) 
            for image in images:
                photos.append(open(image,'rb'))
            for photo in photos:
                responses.append(self.twitter.upload_media(media=photo))
            for response in responses:
                medias.append(response['media_id'])
            try:
                self.twitter.update_status(status= sta, media_ids=medias)
                print("ツイート完了")
            except TwythonError as e:
                print(e)
                print("ツイートできませんでした")
        else:
            try:
                self.twitter.update_status(status = sta)
                print("ツイート完了")
            except TwythonError as e:
                print(e)
                print("ツイートできませんでした")
        

    def post_retweet(self,tweetid):
        
        try:
            self.twitter.retweet(id = tweetid)
            print("リツイート完了")
        except TwythonError as e:
            print(e)
            print("リツイートできませんでした")
        

    def fav(self,tweetid):
        try:
            twitter.create_favorite(id=tweetid)
            print("お気に入り完了")
        except TwythonError as e:
            print(e)
            print("お気に入りにできませんでした")

    def follow (self,screen_id):
        try:
            self.api.create_friendship(screen_id)
            print("フォロー完了")
        except tweepy.error.TweepError:
	        print("フォローできませんでした")

if __name__ == '__main__':

    #例
    #Twitter_Api('xxxxx', 'xxxxx',adtype = "tweet",sta="test!!!!!!!!")
    