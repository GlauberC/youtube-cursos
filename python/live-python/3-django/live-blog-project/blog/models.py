from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField('Titulo', max_length=150)
    description = models.TextField('Description')
    # author = models.ForeignKey(User, verbose_name = 'Autor')
    is_published = models.BooleanField('Publicado?', default = False)
    created_at = models.DateTimeField('Criado em', auto_now_add = True)
    updated_at = models.DateTimeField('Atualizado em', auto_now = True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Publicação'
        verbose_name_plural = 'Publicações'

    def __str__(self):
        return '{} - {}'.format(self.title, self.created_at)