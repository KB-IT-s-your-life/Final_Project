from estates.models import Facilities
import csv


def run():
    with open('estates/facilities.csv', encoding='UTF-8') as file:
        reader = csv.reader(file)
        next(reader)  # Advance past the header

        Facilities.objects.all().delete()

        for row in reader:
            print(row)
            
            facilities = Facilities(
                title = row[1], # 법정동
                
                traffic = row[40], # 교통
                subway = row[2], # 지하철역
                bus = row[3], # 버스정류소
                
                treatment = row[38], # 의료
                hospital = row[18], # 병원
                pharmacy = row[19], # 약국
                medical = row[20], # 의원
                
                welfare = row[43], # 생활복지시설
                security = row[21], # 치안
                police = row[22], # 경찰서
                fire = row[23], # 119안전센터
                post = row[29], # 우체국
                library = row[27], # 도서관
                
                facilities = row[39], # 생활편의시설
                bath = row[6], # 목욕장업
                laundry = row[7], # 세탁업
                
                leisure = row[44], # 여가
                park = row[24], # 공원수
                museum = row[28], # 박물관미술관
                golf = row[5], # 골프연습장
                gym = row[10], # 체력단련장
                billard = row[26], # 당구장
                karaoke = row[25], # 노래방
                movie = row[8], # 영화상영관
                
                shop = row[41], # 쇼핑시설
                department = row[14], # 백화점
                complex = row[15], #복합쇼핑몰
                center = row[16], # 쇼핑센터
                book = row[4], # 서점
                
                mart = row[42], # 장보기시설
                large = row[12], # 대규모점포
                none = row[11], # 구분없음
                supermarket = row[13], # 대형마트
                market = row[17], # 시장
                bakery = row[9], # 제과점
                
                restaurant = row[30], # 음식점
                west = row[33], # 경양식
                bunsik = row[34], # 분식
                japan = row[35], # 일식
                china = row[36], # 중식
                korea = row[37], # 한식
                
                cafe = row[31], # 카페
                fast = row[32],) # 패스트푸드
            facilities.save()