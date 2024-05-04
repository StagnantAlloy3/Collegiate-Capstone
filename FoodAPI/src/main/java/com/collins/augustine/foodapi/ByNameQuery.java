package com.collins.augustine.foodapi;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.mongodb.ConnectionString;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCursor;
import org.bson.Document;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

/**
 * This class provides an endpoint for querying items by their name from a MongoDB database.
 * The endpoint is accessible via a GET request to "/items/by-name".
 *
 * @author Augustine Collins
 */

@Path("/items/by-name")
public class ByNameQuery {

    /**
     * The method returns a JSON array of items that match the query value.
     * @param name The query value.
     * @return A JSON array of items that match the query value.
     *
     * @author Augustine Collins
     */

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String byName(@QueryParam("itemname") String name) {

        JsonArray items = new JsonArray();

        ConnectionString connString = new ConnectionString("mongodb://localhost:27017/Food");
        try{
            MongoClient mongoClient = MongoClients.create(connString);

            Document regex = new Document();
            regex.put("$regex", "^(?)" + name);
            regex.put("$options", "i");

            Document searchItem = new Document();
            searchItem.put("description", regex);

            FindIterable<Document> foundItems = mongoClient.getDatabase("Food").getCollection("Food").find(searchItem);

            try(final MongoCursor<Document> cursor = foundItems.iterator()) {
                while(cursor.hasNext()) {
                    Document doc = cursor.next();
                    JsonObject item = new JsonObject();
                    item.addProperty("fdc_id", doc.getInteger("fdc_id"));
                    item.addProperty("description", doc.getString("description"));
                    items.add(item);
                }
            }

            mongoClient.close();

        } catch (Exception e) {
            System.out.println("Error: " + e);
        }

        return items.toString();
    }
}
