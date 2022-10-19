from estates.models import Database
import csv


def run():
    with open('estates/mamul.csv', encoding="UTF-8") as file:
        reader = csv.reader(file)
        next(reader)  # Advance past the header

        Database.objects.all().delete()

        for row in reader:
            print(row)
            
            database = Database(field1 = row[1],
                                predict = row[2],
                                jachigu = row[3],
                                bubjung = row[4],
                                height = row[5],
                                junwallse = row[6],
                                pyeong = row[7],
                                bozeonggum = row[8],
                                imdaeru = row[9],
                                gunmullmyeong = row[10],
                                lastbozeong = row[11],
                                lastimdaeru = row[12],
                                zibunjuso = row[13],
                                X = row[14],
                                Y = row[15],
                                created_at = row[16],
                                updated_at = row[17])
            database.save()