from estates.models import Mamul
import csv


def run():
    with open('estates/mamul.csv', encoding='UTF-8') as file:
        reader = csv.reader(file)
        next(reader)  # Advance past the header

        Mamul.objects.all().delete()

        for row in reader:
            print(row)
            
            mamul = Mamul(field1 = row[0],
                          unnamed = row[2],
                                predict = row[3],
                                jachigu = row[4],
                                bubjung = row[5],
                                height = row[6],
                                junwallse = row[7],
                                pyeong = row[8],
                                bozeonggum = row[9],
                                imdaeru = row[10],
                                gunmullmyeong = row[11],
                                gunchukyear = row[12],
                                gunmulyongdo = row[13],
                                lastbozeong = row[14],
                                lastimdaeru = row[15],
                                zibunjuso = row[16],
                                x = row[17],
                                y = row[18])
            mamul.save()