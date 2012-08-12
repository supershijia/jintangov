class CreateUsersRoles < ActiveRecord::Migration
  def change
    create_table :users_roles, :id => false do |t|
      t.references :user         #用户ID
      t.references :role         #角色ID

      t.timestamps
    end
    add_index :users_roles, :user_id
    add_index :users_roles, :role_id
  end
end
