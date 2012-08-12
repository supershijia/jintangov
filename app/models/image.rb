class Image < ActiveRecord::Base

  has_and_belongs_to_many :resources
  belongs_to :user

  attr_accessible :img_path, :name, :note, :url, :user_id
end
