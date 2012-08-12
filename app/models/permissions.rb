class Permissions < ActiveRecord::Base
  attr_accessible :authority, :resource_id
end
