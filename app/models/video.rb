class Video < ActiveRecord::Base

  belongs_to :user
  belongs_to :category,:class_name=>"Code",:foreign_key=>"category_id"

  attr_accessible :category_id, :counter, :name, :note, :user_id, :video_path
end
