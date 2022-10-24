from django.db import models

# Create your models here.
class Facilities(models.Model):
    title = models.CharField(max_length=30, primary_key=True) # 법정동
    traffic = models.PositiveIntegerField() # 교통
    subway = models.PositiveIntegerField() # 지하철역
    bus = models.PositiveIntegerField() # 버스정류소
    
    treatment = models.PositiveIntegerField() # 의료
    hospital = models.PositiveIntegerField() # 병원
    pharmacy = models.PositiveIntegerField() # 약국
    medical = models.PositiveIntegerField() # 의원
    
    welfare = models.PositiveIntegerField() # 생활복지시설
    security = models.PositiveIntegerField() # 치안
    police = models.PositiveIntegerField() # 경찰서
    fire = models.PositiveIntegerField() # 119안전센터
    post = models.PositiveIntegerField() # 우체국
    library = models.PositiveIntegerField() # 도서관
    
    facilities = models.PositiveIntegerField() # 생활편의시설
    bath = models.PositiveIntegerField() # 목욕장업
    laundry = models.PositiveIntegerField() # 세탁업
    
    leisure = models.PositiveIntegerField() # 여가
    park = models.PositiveIntegerField() # 공원수
    museum = models.PositiveIntegerField() # 박물관미술관
    golf = models.PositiveIntegerField() # 골프연습장
    gym = models.PositiveIntegerField() # 체력단련장
    billard = models.PositiveIntegerField() # 당구장
    karaoke = models.PositiveIntegerField() # 노래방
    movie = models.PositiveIntegerField() # 영화상영관
    
    shop = models.PositiveIntegerField() # 쇼핑시설
    department = models.PositiveIntegerField() # 백화점
    complex = models.PositiveIntegerField() #복합쇼핑몰
    center = models.PositiveIntegerField() # 쇼핑센터
    book = models.PositiveIntegerField() # 서점
    
    mart = models.PositiveIntegerField() # 장보기시설
    large = models.PositiveIntegerField() # 대규모점포
    none = models.PositiveIntegerField() # 구분없음
    supermarket = models.PositiveIntegerField() # 대형마트
    market = models.PositiveIntegerField() # 시장
    bakery = models.PositiveIntegerField() # 제과점
    
    restaurant = models.PositiveIntegerField() # 음식점
    west = models.PositiveIntegerField() # 경양식
    bunsik = models.PositiveIntegerField() # 분식
    japan = models.PositiveIntegerField() # 일식
    china = models.PositiveIntegerField() # 중식
    korea = models.PositiveIntegerField() # 한식
    
    cafe = models.PositiveIntegerField() # 카페
    fast = models.PositiveIntegerField() # 패스트푸드

class Mamul(models.Model):
    field1 = models.PositiveIntegerField()
    unnamed = models.PositiveIntegerField()
    predict = models.FloatField()
    jachigu = models.CharField(max_length=50)
    bubjung = models.CharField(max_length=50)
    height = models.PositiveIntegerField()
    junwallse = models.CharField(max_length=50)
    pyeong = models.FloatField()
    bozeonggum = models.PositiveIntegerField()
    imdaeru = models.PositiveIntegerField()
    gunmullmyeong = models.CharField(max_length=50)
    gunchukyear = models.PositiveIntegerField()
    gunmulyongdo = models.CharField(max_length=50)
    lastbozeong = models.PositiveIntegerField()
    lastimdaeru = models.PositiveIntegerField()
    zibunjuso = models.CharField(max_length=50)
    x = models.FloatField()
    y = models.FloatField()

class Jachibubjung(models.Model):
    jachigu = models.CharField(max_length=50)
    bubjung = models.CharField(max_length=50)