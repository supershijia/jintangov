class CreateAdminInformation < ActiveRecord::Migration
  def change
    create_table :admin_information do |t|

      t.timestamps
    end
  end
end
