from rest_framework import filters

class IsUserFilterBackend(filters.BaseFilterBackend): 
    """
    Filter for getting only owned objects
    """
    def filter_queryset(self, queryset, request, view): 
        return queryset.filter(user = request.user)