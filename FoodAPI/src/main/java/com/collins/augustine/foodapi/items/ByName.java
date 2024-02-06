package com.collins.augustine.foodapi.items;

import com.google.gson.JsonObject;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/items/by-name")
public class ByName {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String byName(@QueryParam("itemname") String name) {

        JsonObject item = new JsonObject();
        item.addProperty("name", name);

        return item.toString();
    }
}
