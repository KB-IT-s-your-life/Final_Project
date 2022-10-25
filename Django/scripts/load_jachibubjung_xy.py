from estates.models import Jachibubjung_xy
import csv


def run():
    with open('estates/jachibubjung.csv', encoding='UTF-8') as file:
        reader = csv.reader(file)
        next(reader)  # Advance past the header

        Jachibubjung_xy.objects.all().delete()

        for row in reader:
            print(row)
            
            jachibubjung_xy = Jachibubjung_xy(bubjung = row[2],
                                position_x = row[3],
                                position_y = row[4])
            jachibubjung_xy.save()