package com.collins.augustine.foodapi;

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

/*TODO
    * 1. Write tests for this function
 */

/**
 * This class provides an endpoint for querying items by their FDCID from a MongoDB database.
 * The endpoint is accessible via a GET request to "/items/by-id".
 *
 * @author Augustine Collins
 */

@Path("/items/by-id")
public class FDCIDQuery {

    /**
     * The method returns a JSON array of pre-determined fields based on the fdc_id passed.
     * @param fdc_id The query value.
     * @return A JSON object containing fdc_id, brand_owner, ingredients, branded_food_category, and modification_date.
     *
     * @author Augustine Collins
     */

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String byID(@QueryParam("fdc_id") int fdc_id) {
        JsonObject itemInfo = new JsonObject();

        ConnectionString connString = new ConnectionString("mongodb://localhost:27017/Foods");

        try{
            MongoClient mongoClient = MongoClients.create(connString);
            System.out.println("Connected to MongoDB");

            Document search = new Document();
            search.put("fdc_id", fdc_id);

            FindIterable<Document> foundItem = mongoClient.getDatabase("Foods").getCollection("Branded_Foods").find(search);

            try(final MongoCursor<Document> cursor = foundItem.iterator()) {
                if(cursor.hasNext()) {
                    Document doc = cursor.next();
                    itemInfo.addProperty("fdc_id", doc.getInteger("fdc_id"));
                    itemInfo.addProperty("brand_owner", doc.getString("brand_owner"));
                    itemInfo.addProperty("ingredients", doc.getString("ingredients"));
                    itemInfo.addProperty("branded_food_category", doc.getString("branded_food_category"));
                    /*itemInfo.addProperty("modification_date", doc.getDate("modification_date").toString());*/
                }
                else{
                    itemInfo.addProperty("error", "No item found with the given fdc_id");
                }
            }
            mongoClient.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        System.out.println(itemInfo);
        return itemInfo.toString();
    }
}
