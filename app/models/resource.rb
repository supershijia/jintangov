class Resource < ActiveRecord::Base

  has_many :permissionses
  has_and_belongs_to_many :articles
  has_and_belongs_to_many :images


  attr_accessible :code, :name, :url
end
