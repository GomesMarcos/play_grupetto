from django.contrib.auth.admin import User
from django.db import models


class Base( models.Model ):
	created_at = models.DateTimeField( auto_now_add=True )
	updated_at = models.DateTimeField( auto_now_add=True )
	created_by = models.ForeignKey( User, on_delete=models.DO_NOTHING )
	
	class Meta:
		abstract = True


class Difficulty( Base ):
	id = models.SmallIntegerField( primary_key=True, null=False, blank=False, editable=True )
	name = models.CharField( max_length=10 )
	description = models.TextField( blank=True, null=True )
	
	def __str__( self ):
		return self.name


class Settings( Base ):
	id = models.IntegerField( primary_key=True,
		null=False,
		blank=False,
		auto_created=True,
		editable=False )
	dificult_level = models.ForeignKey( Difficulty, on_delete=models.DO_NOTHING )


class User( Base ):
	id = models.UUIDField( primary_key=True,
		verbose_name='user_id',
		auto_created=True,
		editable=False )
	settings = models.OneToOneField( Settings, on_delete=models.CASCADE )
	name = models.CharField( max_length=255, null=False, blank=False )
	nickname = models.CharField( max_length=50, null=False, blank=False )
	email = models.EmailField()
	high_score = models.IntegerField( default=0 )
	last_score = models.IntegerField( default=0 )
	last_score_date = models.DateTimeField( auto_now_add=True )
	
	def __str__( self ):
		return self.nickname


class HighestScores( Base ):
	id = models.IntegerField( primary_key=True, auto_created=True, editable=False )
	user = models.ForeignKey( User, on_delete=models.CASCADE )
	dificult_level = models.ForeignKey( Difficulty, on_delete=models.DO_NOTHING )
	
	def __str__( self ):
		return self.user.high_score
