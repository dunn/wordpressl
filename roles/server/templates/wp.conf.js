<VirtualHost *:80>
  ServerName www.{{ hostname }}
  ServerAlias {{ hostname }} www.{{ hostname }}
  DocumentRoot {{ project_dir }}/
</VirtualHost>
