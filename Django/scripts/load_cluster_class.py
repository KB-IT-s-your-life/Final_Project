from estates.models import cluster_class
import csv


def run():
    with open('estates/clusterclass.csv', encoding='UTF-8') as file:
        reader = csv.reader(file)
        next(reader)  # Advance past the header

        cluster_class.objects.all().delete()

        for row in reader:
            print(row)
            
            Cluster_class = cluster_class(
                                cluster_num = row[1],
                                dong = row[2],
                                )
            Cluster_class.save()