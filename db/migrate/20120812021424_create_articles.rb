class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title                       #标题
      t.text :body                          #内容
      t.integer :ifTop                      #是否置顶
      t.integer :fuser_id                  #第一投稿人
      t.integer :suser_id                  #第二投稿人
      t.integer :tuser_id                  #第三投稿人
      t.integer :source_id                 #信息来源
      t.references :user                   #创建人
      t.integer :auditer_id               #审核人
      t.datetime :audittime               #审核时间
      t.integer :counter                  #浏览次数

      t.timestamps
    end
  end
end
