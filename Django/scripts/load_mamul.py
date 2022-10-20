from estates.models import Mamul
import csv


def run():
    with open('estates/mamul.csv') as file:
        reader = csv.reader(file)
        next(reader)  # Advance past the header

        Mamul.objects.all().delete()

        for row in reader:
            print(row)
            
            mamul = Mamul(field1 = row[0],
                                predict = row[1],
                                jachigu = row[2],
                                bubjung = row[3],
                                height = row[4],
                                junwallse = row[5],
                                pyeong = row[6],
                                bozeonggum = row[7],
                                imdaeru = row[8],
                                gunmullmyeong = row[9],
                                gunchukyear = row[10],
                                gunmulyongdo = row[11],
                                lastbozeong = row[12],
                                lastimdaeru = row[13],
                                zibunjuso = row[14],
                                x = row[15],
                                y = row[16])
            mamul.save()