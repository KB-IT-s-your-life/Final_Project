from django.db import models

# Create your models here.
class Facilities(models.Model):
    title = models.CharField(max_length=30)
    subway = models.PositiveIntegerField()
    bus = models.PositiveIntegerField()
    book = models.PositiveIntegerField()
    golf = models.PositiveIntegerField()
    bath = models.PositiveIntegerField()
    gas = models.PositiveIntegerField()
    laundry = models.PositiveIntegerField()
    movie = models.PositiveIntegerField()
    bakery = models.PositiveIntegerField()
    gym = models.PositiveIntegerField()
    hospital = models.PositiveIntegerField()
    pharmacy = models.PositiveIntegerField()
    medical = models.PositiveIntegerField()
    safefy = models.PositiveIntegerField()
    police = models.PositiveIntegerField()
    fire = models.PositiveIntegerField()
    park = models.PositiveIntegerField()
    karaoke = models.PositiveIntegerField()
    billiard = models.PositiveIntegerField()
    restaurant = models.PositiveIntegerField()
    mart = models.PositiveIntegerField()
    shop = models.PositiveIntegerField()
    # 법정동명,지하철역,버스정류소,서점,골프연습장업,목욕장업,석유판매업,세탁업,영화상영관,제과점영업,체력단련장업,병원,약국,의원,치안센터,경찰서,119안전센터,공원수,노래방수,당구장,음식점수,장보기시설,쇼핑시설