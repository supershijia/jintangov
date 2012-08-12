class Articles < ActiveRecord::Base
  attr_accessible :auditer_id, :audittime, :body, :counter, :fuser_id, :ifTop, :source_id, :suser_id, :title, :tuser_id, :user_id
end
