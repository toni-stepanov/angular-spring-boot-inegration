package boot.angular.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * Created by astepanov
 */
@RestController
public class UserController {

    @RequestMapping("/user")
    public Principal getUser(Principal principal) {
        return principal;
    }

}
