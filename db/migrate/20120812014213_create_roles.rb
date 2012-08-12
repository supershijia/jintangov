class CreateRoles < ActiveRecord::Migration
  def change
    create_table :roles do |t|
      t.string :name           #角色名称

      t.timestamps
    end
  end
end
