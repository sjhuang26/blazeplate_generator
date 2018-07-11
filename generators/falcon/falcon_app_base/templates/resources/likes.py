import falcon
import json

# CRUD Resources
class LikeCollectionResource(object):
    """Handles GET requests"""
    def on_get(self, req, resp):
        resp.status = falcon.HTTP_200  # This is the default status
        resp.body = json.dumps({ "message": "Hi, this is from GET /likes" })

    def on_post(self, req, resp):
      resp.status = falcon.HTTP_200  # This is the default status
      resp.body = json.dumps({ "message": "Hi, this is from POST /likes" })

class LikeModelResource(object):
    def on_get(self, req, resp, like_id):
        resp.status = falcon.HTTP_200  # This is the default status
        resp.body = json.dumps({ "message": "Hi, this is from GET /likes/:id" })

    def on_put(self, req, resp, like_id):
        resp.status = falcon.HTTP_200  # This is the default status
        resp.body = json.dumps({ "message": "Hi, this is from PUT /likes/:id" })

    def on_delete(self, req, resp, like_id):
      resp.status = falcon.HTTP_200  # This is the default status
      resp.body = json.dumps({ "message": "Hi, this is from DELETE /likes/:id" })

# # # # #

# MANY Like to ONE User
class LikeRelatedUserResource(object):
    def on_get(self, req, resp, like_id):
        resp.status = falcon.HTTP_200  # This is the default status
        resp.body = json.dumps({ "message": "Hi, this is from GET /likes/:id/user" })

# # # # #

# MANY Like to ONE Thing
class LikeRelatedThingResource(object):
    def on_get(self, req, resp, like_id):
        resp.status = falcon.HTTP_200  # This is the default status
        resp.body = json.dumps({ "message": "Hi, this is from GET /likes/:id/thing" })
