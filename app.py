from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.readytotrip

## HTML을 주는 부분
@app.route('/')
def mypage():
   return render_template('index.html')

@app.route('/left-day')
def leftDay():
   return render_template('left-day.html')

## API 역할을 하는 부분
@app.route('/post', methods=['POST'])
def post():
   url_receive = request.form['url_give']  # 클라이언트로부터 url을 받는 부분
   comment_receive = request.form['comment_give']  # 클라이언트로부터 comment를 받는 부분

   headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
   data = requests.get(url_receive, headers=headers)

   soup = BeautifulSoup(data.text, 'html.parser')

   og_image = soup.select_one('meta[property="og:image"]')
   og_title = soup.select_one('meta[property="og:title"]')
   og_description = soup.select_one('meta[property="og:description"]')

   url_image = og_image['content']
   url_title = og_title['content']
   url_description = og_description['content']

   article = {'url': url_receive, 'comment': comment_receive, 'image': url_image, 'title': url_title, 'desc': url_description}

   db.articles.insert_one(article)

   return jsonify({'result': 'success'})

@app.route('/post', methods=['GET'])
def view():
   posts = db.articles.find({},{'_id':0})
   return jsonify({'result':'success', 'articles':list(posts)})


# ajax를 통해 클라이언트에서 '/save_user'라는 url로 데이터를 받아옴
@app.route('/save_user', methods=['POST'])
def save_info():
   url_name = request.form['name']  # 클라이언트로부터 url을 받는 부분
   url_city = request.form['city']
   url_date = request.form['date']

   print(url_name, url_city, url_date)

   db.userInfo.insert_one({'name': url_name, 'city': url_city, 'date': url_date})

   return jsonify({'result':'success'})

   # posts = db.articles.find({},{'_id':0})
   # return jsonify({'result':'success', 'articles':list(posts)})

@app.route('/post_user', methods=['POST'])
def post_info():
   url_name = request.form['name']
   url_city = request.form['city']
   url_date = request.form['date']

   db.info.insert_one({'name': url_name, 'city': url_city, 'date': url_date})

   return jsonify({'result': 'success'})

if __name__ == '__main__':
   app.run('0.0.0.0',port=5000,debug=True)

