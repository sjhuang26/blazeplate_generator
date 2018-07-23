# server.py

from flask import Flask
from flask.views import MethodView
import json
from resources.things import *
from resources.likes import *

# # # # #

# TODOs (leftover from Falcon server.py)
# - Add model definition w/ ORM (Mongo, Postgres)
# - Modularize the app into individual files for each resource
# - Generate .env, integrate into server
# - Integrate basic JWT authentication

# # # # #


# Assign the Flask instance (a WSGI application) to the app variable.
app = Flask(__name__)


# Add routes to resources

app.add_url_rule('/things', view_func=ThingCollectionResource.as_view('thing_collection_resource'), methods=['GET', 'POST'])
app.add_url_rule('/things/<thing_id>', view_func=ThingModelResource.as_view('thing_model_resource'), methods=['GET', 'PUT', 'DELETE'])
app.add_url_rule('/things/<thing_id>/user', view_func=ThingRelatedUserResource.as_view('thing_related_user_resouce'), methods=['GET'])
app.add_url_rule('/things/<thing_id>/physical', view_func=ThingRelatedPhysicalThingResource.as_view('thing_related_physical_thing_resouce'), methods=['GET'])
app.add_url_rule('/things/<thing_id>/likes', view_func=ThingRelatedLikesResource.as_view('thing_related_likes_resouce'), methods=['GET'])

app.add_url_rule('/likes', view_func=LikeCollectionResource.as_view('like_collection_resource'), methods=['GET', 'POST'])
app.add_url_rule('/likes/<like_id>', view_func=LikeModelResource.as_view('like_model_resource'), methods=['GET', 'PUT', 'DELETE'])
app.add_url_rule('/likes/<like_id>/user', view_func=LikeRelatedUserResource.as_view('like_related_user_resouce'), methods=['GET'])
app.add_url_rule('/likes/<like_id>/thing', view_func=LikeRelatedThingResource.as_view('like_related_thing_resouce'), methods=['GET'])



if __name__ == '__main__':
    app.run(debug=True)
