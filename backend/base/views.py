from .serializers import GroupSerializer, UserSerializer
from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets


class UserViewset( viewsets.ModelViewSet ):
	"""
    API endpoint that allows users to be viewed or edited.
    """
	queryset = User.objects.all().order_by( '-date_joined' )
	serializer_class = UserSerializer
	permissions_classes = [ permissions.AllowAny ]


class GroupViewset( viewsets.ModelViewSet ):
	"""
    API endpoint that allows groups to be viewed or edited.
    """
	queryset = Group.objects.all()
	serializer_class = GroupSerializer
	permissions_classes = [ permissions.IsAuthenticatedOrReadOnly ]
