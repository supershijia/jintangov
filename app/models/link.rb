class Link < ActiveRecord::Base

  belongs_to :user

  attr_accessible :img_path, :name, :url, :user_id
end
