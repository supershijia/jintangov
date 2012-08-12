class CreatePermissions < ActiveRecord::Migration
  def change
    create_table :permissions do |t|
      t.references :resource          #资源ID
      t.string :authority             #操作类型

      t.timestamps
    end
  end
end
