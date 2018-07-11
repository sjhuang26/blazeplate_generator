# server.py

import falcon
import json
from resources.things import *
from resources.likes import *

# # # # #

# TODOs
# - Add model definition w/ ORM (Mongo, Postgres)
# - Modularize the app into individual files for each resource
# - Generate .env, integrate into server
# - Integrate basic JWT authentication

# # # # #

# falcon.API instances are callable WSGI apps
app = falcon.API()

# Add routes to resources
app.add_route('/things', ThingCollectionResource())
app.add_route('/things/{thing_id}/user', ThingRelatedUserResource())
app.add_route('/things/{thing_id}/likes', ThingRelatedLikesResource())
app.add_route('/things/{thing_id}/physical', ThingRelatedPhysicalThingResource())

app.add_route('/likes', LikeCollectionResource())
app.add_route('/likes/{like_id}/user', LikeRelatedUserResource())
app.add_route('/likes/{like_id}/thing', LikeRelatedThingResource())

# # # # #

# Run this with
# $ pip install waitress
# $ waitress-serve --port=8000 things:app