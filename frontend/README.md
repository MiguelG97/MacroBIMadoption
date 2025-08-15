# TEST DRY RUN RENEWAL

`sudo certbot renew --dry-run`

# Renew the certificate

`sudo certbot renew`

# Free up port 80 after renewal

```
sudo lsof -i :80
sudo kill -9 <PID>
```
