# API Information #

**host** = <https://to-do-crud-api-endpoints.vercel.app/>

* ***Create a new task***
    * POST request
    * host/api/create
    * req.body = {"text":"Meet at 6 P.M.", "userid":1}

* ***List of all tasks for a user***
    * POST request
    * host/api/fetch
    * req.body = {"userid":1}

* ***List of all pending tasks for a user***
    * POST request
    * host/api/pending
    * req.body = {"userid":1}

* ***Mark a task done***
    * PATCH request
    * host/api/ckt
    * req.body = {"id":1}

* ***Mark a task pending***
    * PATCH request
    * host/api/ckf
    * req.body = {"id":1}

* ***Update a task***
    * PATCH request
    * host/api/update
    * req.body = {"id":1,"text":"Updated task"}

* ***Delete a task***
    * DELETE request
    * host/api/delete
    * req.body = {"id":1}
