package angulargrails

import grails.transaction.Transactional

@Transactional
class UserService {

  void register(User user){
    user.save()
  }

  def userList(){
    return User.findAll()
  }
}
