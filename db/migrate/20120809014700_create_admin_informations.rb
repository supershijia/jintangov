class CreateAdminInformations < ActiveRecord::Migration
  def change
    create_table :admin_informations do |t|

      t.timestamps
    end
  end
end
