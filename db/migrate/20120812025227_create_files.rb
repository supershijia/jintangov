class CreateFiles < ActiveRecord::Migration
  def change
    create_table :files do |t|
      t.string :name                    #文件名称
      t.text :note                      #文件描述
      t.string :file_path               #文件路径
      t.string :category_id             #文件类型
      t.integer :user_id                #创建人
      t.integer :fuser_id               #第一投稿人
      t.integer :suser                   #第二投稿人
      t.integer :tuser_id               #第三投稿人
      t.integer :source_id              #信息来源
      t.integer :auditer_id             #审核人
      t.datetime :audittime              #审核时间
      t.integer :counter                #下载次数

      t.timestamps
    end
  end
end
