from django.contrib import admin
from . models import Facilities
from .models import Database


# Register your models here.
class DatabaseAdmin(admin.ModelAdmin):
    
    list_display = ('field1', 'predict', 'jachigu', 'bubjung', 'height', 'junwallse', 'pyeong', 'bozeonggum', 'imdaeru', 'gunmullmyeong', 'yongdo', 'zibunjuso', 'imdaeru', 'gunmulyongdo', 'year', 'created_at', 'updated_at',)
    # 'lastimdaeru', 'zibunjuso', 'gunchukyear', 'gunmulyongdo', 'lastbozeong', 'created_at', 'updated_at',)
admin.site.register(Database, DatabaseAdmin)

# Register your models here.
class FacilitiesAdmin(admin.ModelAdmin):
    
    list_display = ('pk', 'title', 'subway', 'bus', 'book', 'golf', 'bath', 'gas', 'laundry', 'movie', 'bakery', 'gym', 'hospital', 'pharmacy', 'medical', 'safefy', 'police', 'fire', 'park', 'karaoke', 'billiard', 'restaurant', 'mart', 'shop',)
    
admin.site.register(Facilities, FacilitiesAdmin)