class CreateResources < ActiveRecord::Migration
  def change
    create_table :resources do |t|
      t.string :name               #资源名称
      t.string :code               #资源编号
      t.string :url                #url地址

      t.timestamps
    end
  end
end


