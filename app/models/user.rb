class User < ActiveRecord::Base
  include ActiveModel::Validations

  has_and_belongs_to_many :roles
  belongs_to :dept
  has_many :image
  has_many :files
  has_many :articles
  has_many :links
  has_many :videos

  acts_as_authentic

  attr_accessor :password_confirmation,:persistence_token
  attr_accessible :login_name, :name, :password,:password_confirmation, :dept_id, :last_login_time, :last_login_ip

end
