package com.collins.augustine.foodapi.items;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.mongodb.ConnectionString;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCursor;
import org.bson.Document;

@Path("/items/by-name")
public class ByName {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String byName(@QueryParam("itemname") String name) {

        JsonArray items = new JsonArray();

        ConnectionString connString = new ConnectionString("mongodb://localhost:27017/Foods");
        try{
            MongoClient mongoClient = MongoClients.create(connString);
            System.out.println("Connected to MongoDB");

            Document regex = new Document();
            regex.put("$regex", "^(?)" + name);
            regex.put("$options", "i");

            Document searchItem = new Document();
            searchItem.put("description", regex);

            FindIterable<Document> foundItems = mongoClient.getDatabase("Foods").getCollection("Food").find(searchItem);

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

        System.out.println("Items: " + items);

        return items.toString();
    }
}
