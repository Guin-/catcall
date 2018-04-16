from settings import PETFINDER_API_KEY
from proxy.views import proxy_view

def petfinder_view(request, path):
    requests_args = {'params': {'key': PETFINDER_API_KEY, 'format':'json', 'animal': 'cat', 'count': 12 }}
    remoteurl = 'http://api.petfinder.com/' + path
    return proxy_view(request, remoteurl, requests_args)


