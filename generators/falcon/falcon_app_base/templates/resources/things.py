import falcon
import json

# CRUD Resources
class ThingCollectionResource(object):
    """Handles GET requests"""
    def on_get(self, req, resp):
        resp.status = falcon.HTTP_200  # This is the default status
        resp.body = json.dumps({ "message": "Hi, this is from GET /things" })

    def on_post(self, req, resp):
      resp.status = falcon.HTTP_200  # This is the default status
      resp.body = json.dumps({ "message": "Hi, this is from POST /things" })

class ThingModelResource(object):
    def on_get(self, req, resp, thing_id):
        resp.status = falcon.HTTP_200  # This is the default status
        resp.body = json.dumps({ "message": "Hi, this is from GET /things/:id" })

    def on_put(self, req, resp, thing_id):
        resp.status = falcon.HTTP_200  # This is the default status
        resp.body = json.dumps({ "message": "Hi, this is from PUT /things/:id" })

    def on_delete(self, req, resp, thing_id):
      resp.status = falcon.HTTP_200  # This is the default status
      resp.body = json.dumps({ "message": "Hi, this is from DELETE /things/:id" })

# # # # #

# MANY Thing to ONE User
class ThingRelatedUserResource(object):
    def on_get(self, req, resp, thing_id):
        resp.status = falcon.HTTP_200  # This is the default status
        resp.body = json.dumps({ "message": "Hi, this is from GET /things/:id/user" })

# # # # #

# ONE Thing to ONE PhysicalThing
class ThingRelatedPhysicalThingResource(object):
    def on_get(self, req, resp, thing_id):
        resp.status = falcon.HTTP_200  # This is the default status
        resp.body = json.dumps({ "message": "Hi, this is from GET /things/:id/physical" })

# # # # #

# ONE Thing to MANY Likes
class ThingRelatedLikesResource(object):
    def on_get(self, req, resp, thing_id):
        resp.status = falcon.HTTP_200  # This is the default status
        resp.body = json.dumps({ "message": "Hi, this is from GET /things/:id/likes" })
