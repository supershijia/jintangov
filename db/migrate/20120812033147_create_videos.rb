class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :name               #视频名称
      t.text :note                 #视频描述
      t.string :video_path        #视频路径
      t.string :category_id       #视频类型
      t.integer :user_id           #创建人
      t.integer :counter           #浏览次数

      t.timestamps
    end
  end
end
