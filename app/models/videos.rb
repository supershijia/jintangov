class Videos < ActiveRecord::Base
  attr_accessible :category_id, :counter, :name, :note, :user_id, :video_path
end
