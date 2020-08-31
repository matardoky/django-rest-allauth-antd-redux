from rest_framework import filters

class IsUserFilterBackend(filters.BaseFilterBackend): 
    
    def filter_queryset(self, queryset, request, view): 
        return queryset.filter(user = request.user)