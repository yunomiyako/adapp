# -*- coding: utf-8 -*-
import oauth2
import webbrowser as web
from twython import Twython, TwythonError

def main():
    # OAuth その1
    consumer = oauth2.Consumer(key="yIw7ggh1RPJMiUfipmZllpfAF", secret="14i6GhCaqAyevnXAPiQBDqR1rZ7MpsQqNI0fFUi1Z1nOnpSrb6")
    client = oauth2.Client(consumer)
    resp, content = client.request("https://api.twitter.com/oauth/request_token", "GET")
    print("■取得したtoken")
    print("----")




    # Tokenを辞書型にセット
    str = content.decode('utf-8')

    a=[str.split("&")] 

    list = [t.split() for t in str.split("&")]



    d = ({})
    for t in list:
        a = t[0].split("=")
        d.update({ a[0] : a[1] }) # dの中身は文字列
        
    print("■tokenを辞書化")
    print(d)
    print("----")
    #d = {'oauth_token': '5k04iwAAAAAA1OhDAAABXO9D4lk', 'oauth_token_secret': 'ITYIIQVh9Iga6ue4ox8jwjO0sml7RTJU', 'oauth_callback_confirmed': 'true'}

    # 認証用ページを開く
    url = "https://api.twitter.com/oauth/authorize?oauth_token=" + d['oauth_token']
    web.open(url)
