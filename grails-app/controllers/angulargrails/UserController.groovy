package angulargrails
import grails.converters.JSON

class UserController {
    def userService

    def register = { 
      def resp = [:]
      println request.JSON
      User user;
      user = new User(fullName: request.JSON.fullName, 
                      userName: request.JSON.userName,
                      password: request.JSON.password)
      userService.register(user)
      resp.message = "User registered Successfully"
      render resp as JSON
    }

    def userList = {
      def resp = [:]
      resp.users = userService.userList()
      render resp as JSON
    }
}
