from django.contrib import admin
from . models import Facilities
from .models import Mamul


# Register your models here.
class MamulAdmin(admin.ModelAdmin):
    
    list_display = ('field1', 'predict', 'jachigu', 'bubjung', 'height', 'junwallse', 'pyeong', 'bozeonggum', 'imdaeru', 'gunmullmyeong', 'gunchukyear', 'gunmulyongdo', 'lastbozeong', 'lastimdaeru', 'zibunjuso', 'x', 'y')
    
admin.site.register(Mamul, MamulAdmin)

# Register your models here.
