class File < ActiveRecord::Base

  belongs_to :user
  belongs_to :category,:class_name=>"Code",:foreign_key=>"category_id"

  attr_accessible :auditer_id, :audittime, :category_id, :counter, :file_path, :fuser_id, :name, :note, :source_id, :suser, :tuser_id, :user_id
end
