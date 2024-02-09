import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

//Test to see if the byName method returns the correct items

/**
 * Test of the FDCIDQuery endpoint functionality.
 *
 * @author Augustine Collins
 */

public class FDCIDQueryTest {

    /**
     * Test of the FDCIDQuery endpoint functionality.
     * @throws Exception
     */

    @Test
    public void testFDCIDQuery() throws Exception {
        //Query for the item Pork Loin Boneless
        HttpRequest request = HttpRequest.newBuilder()
                .uri(new URI("http://localhost:8080/FoodAPI_war_exploded/api/items/by-fdcid?fdcId=1105904"))
                .GET()
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

        Assertions.assertEquals(200, response.statusCode());
        Assertions.assertTrue(response.body().contains("brand_owner"));
        Assertions.assertTrue(response.body().contains("ingredients"));
        Assertions.assertTrue(response.body().contains("description"));
        Assertions.assertTrue(response.body().contains("gtin_upc"));
        Assertions.assertEquals("{\"description\":\"WESSON Vegetable Oil 1 GAL\",\"brand_owner\":\"Richardson Oilseed Products (US) Limited\",\"ingredients\":\"Vegetable Oil\",\"gtin_upc\":27000612323}", response.body());


        //Query with integer overflow
        request = HttpRequest.newBuilder()
                .uri(new URI("http://localhost:8080/FoodAPI_war_exploded/api/items/by-fdcid?fdcId=999999999999"))
                .GET()
                .build();
        response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

        Assertions.assertEquals(404, response.statusCode());


        //Query with a string instead of an integer
        request = HttpRequest.newBuilder()
                .uri(new URI("http://localhost:8080/FoodAPI_war_exploded/api/items/by-fdcid?fdcId=testStringHere"))
                .GET()
                .build();
        response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

        Assertions.assertEquals(404, response.statusCode());

    }

}
