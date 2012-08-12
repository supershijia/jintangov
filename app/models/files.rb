class Files < ActiveRecord::Base
  attr_accessible :auditer_id, :audittime, :category_id, :counter, :file_path, :fuser_id, :name, :note, :source_id, :suser, :tuser_id, :user_id
end
