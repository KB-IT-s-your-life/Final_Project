from django.contrib import admin
from . models import Facilities
from .models import Mamul


# Register your models here.
class MamulAdmin(admin.ModelAdmin):
    
    list_display = ('field1', 'predict', 'jachigu', 'bubjung', 'height', 'junwallse', 'pyeong', 'bozeonggum', 'imdaeru', 'gunmullmyeong', 'gunchukyear', 'gunmulyongdo', 'lastbozeong', 'lastimdaeru', 'zibunjuso', 'x', 'y')
    # 'lastimdaeru', 'zibunjuso', 'gunchukyear', 'gunmulyongdo', 'lastbozeong', 'created_at', 'updated_at',)
admin.site.register(Mamul, MamulAdmin)

# Register your models here.
class FacilitiesAdmin(admin.ModelAdmin):
    
    list_display = ('pk', 'title', 'subway', 'bus', 'book', 'golf', 'bath', 'gas', 'laundry', 'movie', 'bakery', 'gym', 'hospital', 'pharmacy', 'medical', 'safefy', 'police', 'fire', 'park', 'karaoke', 'billiard', 'restaurant', 'mart', 'shop',)
    
admin.site.register(Facilities, FacilitiesAdmin)