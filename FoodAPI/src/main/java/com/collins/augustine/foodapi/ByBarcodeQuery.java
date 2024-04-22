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

@Path("/items/by-barcode")
public class ByBarcodeQuery {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String byBarcode(@QueryParam("barcode") Long barcode) {

        int fdcID;

        ConnectionString connString = new ConnectionString("mongodb://localhost:27017/Foods");
        try {
            MongoClient mongoClient = MongoClients.create(connString);

            Document searchItem = new Document();
            searchItem.put("gtin_upc", barcode);

            FindIterable<Document> foundItems = mongoClient.getDatabase("Foods").getCollection("Branded_Foods").find(searchItem);

            try (final MongoCursor<Document> cursor = foundItems.iterator()) {
                if (cursor.hasNext()) {
                    Document doc = cursor.next();
                    fdcID = doc.getInteger("fdc_id");
                } else {
                    JsonObject error = new JsonObject();
                    error.addProperty("error", "Item not found.");
                    return error.toString();
                }
            }
        } catch (Exception e) {
            JsonObject error = new JsonObject();
            error.addProperty("error", "An error occurred.");
            return error.toString();
        }

        //Leverage the code we already have
        FDCIDQuery fdcIDQuery = new FDCIDQuery();
        return fdcIDQuery.byID(fdcID);
    }
}
