class Images < ActiveRecord::Base
  attr_accessible :img_path, :name, :note, :url, :user_id
end
