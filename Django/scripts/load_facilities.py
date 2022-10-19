from estates.models import Facilities
import csv


def run():
    with open('estates/facilites.csv', encoding='UTF-8') as file:
        reader = csv.reader(file)
        next(reader)  # Advance past the header

        Facilities.objects.all().delete()

        for row in reader:
            print(row)
            
            facilities = Facilities(title = row[1],
                                    subway = row[2],
                                    bus = row[3],
                                    book = row[4],
                                    golf = row[5],
                                    bath = row[6],
                                    gas = row[7],
                                    laundry = row[8],
                                    movie = row[9],
                                    bakery = row[10],
                                    gym = row[11],
                                    hospital = row[12],
                                    pharmacy = row[13],
                                    medical = row[14],
                                    safefy = row[15],
                                    police = row[16],
                                    fire = row[17],
                                    park = row[18],
                                    karaoke = row[19],
                                    billiard = row[20],
                                    restaurant = row[21],
                                    mart = row[22],
                                    shop = row[23])
            facilities.save()