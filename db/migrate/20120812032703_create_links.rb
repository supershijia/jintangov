class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :name            #链接名称
      t.string :img_path        #图片地址
      t.string :url             #URL
      t.integer :user_id        #创建人

      t.timestamps
    end
  end
end
