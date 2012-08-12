class Permission < ActiveRecord::Base

  belongs_to :resource
  has_and_belongs_to_many :roles

  attr_accessible :authority, :resource_id
end
