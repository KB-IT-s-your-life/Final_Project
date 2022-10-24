from estates.models import Jachibubjung
import csv


def run():
    with open('estates/jachibubjung.csv', encoding='UTF-8') as file:
        reader = csv.reader(file)
        next(reader)  # Advance past the header

        Jachibubjung.objects.all().delete()

        for row in reader:
            print(row)
            
            jachibubjung = Jachibubjung(jachigu = row[1],
                                bubjung = row[2])
            jachibubjung.save()