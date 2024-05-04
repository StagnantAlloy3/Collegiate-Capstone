import com.collins.augustine.foodapi.ByBarcodeQuery;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;


/**
 * Test of the BarcodeScanner endpoint functionality
 *
 * @author Augustine Collins
 */

public class ByBarcodeQueryTest {

    /**
     * Test of the BarcodeScanner endpoint functionality
     */

    @Test
    public void testBarcodeQuery() throws Exception {
        ByBarcodeQuery barcodeQuery = new ByBarcodeQuery();

        //Mock a request to the endpoint
        String test1 = barcodeQuery.byBarcode(27000612323L);

        //Check values returned
        Assertions.assertTrue(test1.contains("brand_owner"));
        Assertions.assertTrue(test1.contains("ingredients"));
        Assertions.assertTrue(test1.contains("ingredients"));
        Assertions.assertTrue(test1.contains("modified_date"));
        Assertions.assertEquals("{\"fdc_id\":1847384,\"brand_owner\":\"Richardson Oilseed Products (US) Limited\",\"ingredients\":\"Vegetable Oil\",\"branded_food_category\":\"Oils Edible\",\"modified_date\":\"12/1/2020 0:00\"}", test1);

        //Query with integer overflow
        String test2 = barcodeQuery.byBarcode(9999999999999L);

        Assertions.assertEquals("{\"error\":\"Item not found.\"}", test2);

        //Query with a string instead of an integer
        HttpRequest request = HttpRequest.newBuilder()
                .uri(new URI("http://localhost:8080/FoodAPI_war_exploded/api/items/by-barcode?barcode=testStringHere"))
                .GET()
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

        Assertions.assertEquals(404, response.statusCode());
    }
}
