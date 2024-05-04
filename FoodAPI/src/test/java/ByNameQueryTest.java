import com.collins.augustine.foodapi.ByNameQuery;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

/**
 * Test of the ByName endpoint functionality.
 *
 * @author Augustine Collins
 */

public class ByNameQueryTest {

    /**
     * Test of the ByName endpoint functionality.
     */

    @Test
    public void testByName() {

        //Query for the item Pork Loin Boneless
        ByNameQuery byNameQuery = new ByNameQuery();
        String test1 = byNameQuery.byName("Pork Loin Boneless");

        Assertions.assertTrue(test1.contains("fdc_id"));
        Assertions.assertTrue(test1.contains("description"));
        Assertions.assertEquals("[{\"fdc_id\":1105969,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":1105971,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1105981,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":1105988,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1105998,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":1106005,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":351057,\"description\":\"PORK LOIN BONELESS S/O\"},{\"fdc_id\":614900,\"description\":\"Pork Loin Boneless Strap On 11 Down Basted NTE 16% Solution MBG#415\"},{\"fdc_id\":615078,\"description\":\"Pork Loin Boneless Basted NTE 16% Solution with Cajun Down Home Seasonings MBG#413\"},{\"fdc_id\":615132,\"description\":\"Pork Loin Boneless Basted NTE 16% Solution with Cracked Rosemary Seasonings MBG#413\"},{\"fdc_id\":615188,\"description\":\"Pork Loin Boneless Strap On 11 Down Basted NTE 16% Solution MBG#415\"},{\"fdc_id\":615260,\"description\":\"Pork Loin Boneless Basted NTE 16% Solution with Cajun Down Home Seasonings MBG#413\"},{\"fdc_id\":615268,\"description\":\"Pork Loin Boneless Strap On VP MBG#413\"},{\"fdc_id\":615394,\"description\":\"Pork Loin Boneless Strap On 11 Down Basted NTE 16% Solution MBG#413\"},{\"fdc_id\":615464,\"description\":\"Pork Loin Boneless Strap On 11 Down Basted NTE 16% Solution MBG#413\"},{\"fdc_id\":762640,\"description\":\"PORK LOIN BONELESS S/O\"},{\"fdc_id\":792435,\"description\":\"Pork Loin Boneless Strap On 11 Down Basted NTE 16% Solution MBG#415\"},{\"fdc_id\":792469,\"description\":\"Pork Loin Boneless Strap On 11 Down Basted NTE 16% Solution MBG#413\"},{\"fdc_id\":809928,\"description\":\"Pork Loin Boneless Strap On 11 Down Basted NTE 16% Solution MBG#415\"},{\"fdc_id\":809996,\"description\":\"Pork Loin Boneless Strap On 11 Down Basted NTE 16% Solution MBG#415\"},{\"fdc_id\":810064,\"description\":\"Pork Loin Boneless Strap On 11 Down Basted NTE 16% Solution MBG#413\"},{\"fdc_id\":810096,\"description\":\"Pork Loin Boneless Strap On 11 Down Basted NTE 16% Solution MBG#413\"},{\"fdc_id\":811294,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":811304,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":811324,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":811340,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":811362,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":811384,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":1849209,\"description\":\"Pork Loin Boneless Strap Off 6.5 up MBG#413PSO4\"},{\"fdc_id\":1849242,\"description\":\"Pork Loin Boneless Strap On\"},{\"fdc_id\":1849264,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1849267,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1849604,\"description\":\"Pork Loin Boneless Strap Off All Natural\"},{\"fdc_id\":1146312,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1146316,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":1146341,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1146431,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":1146464,\"description\":\"Pork Loin Boneless Strap On\"},{\"fdc_id\":1146478,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1146494,\"description\":\"Pork Loin Boneless Strap On\"},{\"fdc_id\":1146520,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":1146551,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":1146629,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1146639,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1146645,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1146654,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1165762,\"description\":\"PORK LOIN BONELESS S/O\"},{\"fdc_id\":1170286,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1170290,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":1170298,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1170320,\"description\":\"Pork Loin Boneless Basted NTE 16% Solution with Cajun Down Home Seasonings MBG#413\"},{\"fdc_id\":1170337,\"description\":\"Pork Loin Boneless Basted NTE 16% Solution with Cracked Rosemary Seasonings MBG#413\"},{\"fdc_id\":1170348,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":1170361,\"description\":\"Pork Loin Boneless Basted NTE 16% Solution with Cajun Down Home Seasonings MBG#413\"},{\"fdc_id\":1170363,\"description\":\"Pork Loin Boneless Strap On\"},{\"fdc_id\":1170368,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1170374,\"description\":\"Pork Loin Boneless Strap On\"},{\"fdc_id\":1170393,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":1170408,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":1170422,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1170423,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1170425,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1170428,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1457764,\"description\":\"PORK LOIN BONELESS S/O\"},{\"fdc_id\":1462298,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1462302,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":1462310,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1462332,\"description\":\"Pork Loin Boneless Basted NTE 16% Solution with Cajun Down Home Seasonings MBG#413\"},{\"fdc_id\":1462349,\"description\":\"Pork Loin Boneless Basted NTE 16% Solution with Cracked Rosemary Seasonings MBG#413\"},{\"fdc_id\":1462360,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":1462373,\"description\":\"Pork Loin Boneless Basted NTE 16% Solution with Cajun Down Home Seasonings MBG#413\"},{\"fdc_id\":1462375,\"description\":\"Pork Loin Boneless Strap On\"},{\"fdc_id\":1462380,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1462386,\"description\":\"Pork Loin Boneless Strap On\"},{\"fdc_id\":1462405,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":1462420,\"description\":\"Pork Loin Boneless\"},{\"fdc_id\":1462434,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1462435,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1462437,\"description\":\"Pork Loin Boneless Strap Off\"},{\"fdc_id\":1462440,\"description\":\"Pork Loin Boneless Strap Off\"}]", test1);
        //Query for the item @
        String test2 = byNameQuery.byName("@");

        Assertions.assertTrue(test2.contains("fdc_id"));
        Assertions.assertTrue(test2.contains("description"));
        Assertions.assertEquals("[{\"fdc_id\":448328,\"description\":\"@EASE, BROCCOLI, CAULIFLOWER & CARROT WITH CHEESE SAUCE\"},{\"fdc_id\":448329,\"description\":\"@EASE, FIRE-ROASTED CORN WITH BUTTER SAUCE\"}]", test2);

        //Query for nonsense request
        String test3 = byNameQuery.byName("$$$$");

        Assertions.assertEquals("[]", test3);

    }

}
