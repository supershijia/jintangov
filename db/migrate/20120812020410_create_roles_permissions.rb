class CreateRolesPermissions < ActiveRecord::Migration
  def change
    create_table :roles_permissions, :id => false do |t|
      t.references :role         #角色ID
      t.references :permission  #权限ID

      t.timestamps
    end
    add_index :roles_permissions, :role_id
    add_index :roles_permissions, :permission_id
  end
end
