import requests
from bs4 import BeautifulSoup  #web scraping
from pymongo import MongoClient #mongodb connect

client = MongoClient('localhost', 27017)
db=client.dbsparta

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://www.genie.co.kr/chart/top200?ditc=D&ymd=20200403&hh=23&rtm=N&pg=1',headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')


allMusic=soup.select('#body-content > div.newest-list > div > table > tbody > tr')

for one in allMusic:
    rankInfo=one.select_one('td.number').text
    titleInfo=one.select_one('td.info > a.title.ellipsis').text
    artInfo=one.select_one('td.info > a.artist.ellipsis').text
    rank=int(rankInfo.split()[0])
    title=titleInfo.strip()
    print(rank,'/ '+ title +' - '+ artInfo)