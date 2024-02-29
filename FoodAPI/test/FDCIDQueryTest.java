import com.collins.augustine.foodapi.FDCIDQuery;
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
     *
     */


    @Test
    public void testFDCIDQuery() throws Exception {

        FDCIDQuery fdcidQuery = new FDCIDQuery();

        //Mock a request to the endpoint
        String test1 = fdcidQuery.byID(1105904);

        //Check values returned
        Assertions.assertTrue(test1.contains("brand_owner"));
        Assertions.assertTrue(test1.contains("ingredients"));
        Assertions.assertTrue(test1.contains("ingredients"));
        Assertions.assertTrue(test1.contains("modified_date"));
        Assertions.assertEquals("{\"fdc_id\":1105904,\"brand_owner\":\"Richardson Oilseed Products (US) Limited\",\"ingredients\":\"Vegetable Oil\",\"branded_food_category\":\"Oils Edible\",\"modified_date\":\"Thu Oct 01 20:00:00 EDT 2020\"}", test1);


        //Query with integer overflow

        String test2 = fdcidQuery.byID(999999999);

        Assertions.assertEquals("{\"error\":\"No item found with the given fdc_id\"}", test2);


        //Query with a string instead of an integer
        HttpRequest request = HttpRequest.newBuilder()
                .uri(new URI("http://localhost:8080/FoodAPI_war_exploded/api/items/by-id?fdc_id=testStringHere"))
                .GET()
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

        Assertions.assertEquals(404, response.statusCode());
    }

}
