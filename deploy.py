import paramiko, os

c = paramiko.SSHClient()
c.set_missing_host_key_policy(paramiko.AutoAddPolicy())
c.connect('157.66.35.84', username='root', password='5QuqKNWjXaJ4', timeout=20)
sftp = c.open_sftp()

def mkdirp(path):
    parts = path.strip('/').split('/')
    cur = ''
    for p in parts:
        cur += '/' + p
        try:
            sftp.mkdir(cur)
        except IOError:
            pass

# clear old site files
si, so, se = c.exec_command('rm -rf /var/www/scripta/*', timeout=30)
so.read(); se.read()
mkdirp('/var/www/scripta')

local = r'C:\Users\ahmad\Documents\College\Projects\Scripta_Web\dist'
count = 0
for root, dirs, files in os.walk(local):
    rel = os.path.relpath(root, local).replace('\\', '/')
    remote_dir = '/var/www/scripta' if rel == '.' else '/var/www/scripta/' + rel
    mkdirp(remote_dir)
    for f in files:
        sftp.put(os.path.join(root, f), remote_dir + '/' + f)
        count += 1

print('uploaded', count, 'files')
si, so, se = c.exec_command('du -sh /var/www/scripta && curl -sI https://scripta.web.id --insecure | head -3', timeout=20)
print(so.read().decode())

sftp.close()
c.close()
