package tiy.com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by jessicatracy on 9/21/16.
 */
@RestController
public class StringReverserJSONController {
    @Autowired
    StringItemRepository stringItems;

    @RequestMapping(path = "/string-item.json", method = RequestMethod.GET)
    public StringItem getStringItemJson(String stringToReverse) {
        String reversedString = reverseString(stringToReverse);
        StringItem myStringItem = new StringItem(stringToReverse, reversedString);
        stringItems.save(myStringItem);

        return myStringItem;
    }

    public String reverseString(String stringToReverse) {
        System.out.println("Now reversing the following string: " + stringToReverse);
        String reversedString = "";
        for (int counter = stringToReverse.length() - 1; counter >= 0; counter--) {
            reversedString += stringToReverse.substring(counter, counter + 1);
        }
        System.out.println("Reversed string: " + reversedString);

        return reversedString;
    }
}
