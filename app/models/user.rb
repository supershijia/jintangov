class User < ActiveRecord::Base
  include ActiveModel::Validations

  attr_accessible :login_name, :name, :password, :dept_id, :last_login_time, :last_login_ip

end
