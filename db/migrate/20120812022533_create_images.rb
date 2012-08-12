class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :name               #图片名称
      t.text :note                 #图片描述
      t.string :img_path           #图片路径
      t.string :url                #外链地址
      t.integer :user_id           #创建人

      t.timestamps
    end
  end
end





