class Dept < ActiveRecord::Base

  has_many :users

  attr_accessible :code, :name
end
