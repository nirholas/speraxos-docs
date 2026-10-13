# Verify a deployment's discovery surface

Run [`snippets/check-discovery.sh`](../../snippets/check-discovery.sh). It requests each surface and prints the status code and content type. Pass another origin to check a different deployment:

```bash
bash snippets/check-discovery.sh https://chat.sperax.io
```

A healthy production deployment returns 200 for every listed path.
