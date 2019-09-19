from catcall.settings.base import PETFINDER_API_KEY, PETFINDER_SECRET
from proxy.views import proxy_view
import requests

def authenticate():
    url = 'http://api.petfinder.com/v2/oauth2/token'
    data = {
        'grant_type': 'client_credentials',
        'client_id': PETFINDER_API_KEY,
        'client_secret': PETFINDER_SECRET
    }

    r = requests.post(url, data=data)
    return r.json()['access_token']

def petfinder_view(request, path):
    requests_args = { 'headers': {'Authorization': 'Bearer ' + authenticate()},
                      'params': { 'type': 'cat', 'limit': 30 }
                     }
    remoteurl = 'http://api.petfinder.com/v2/' + path
    return proxy_view(request, remoteurl, requests_args)


