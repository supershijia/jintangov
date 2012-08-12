class CreateImagesResources < ActiveRecord::Migration
  def change
    create_table :images_resources do |t|
      t.references :image
      t.references :resource

      t.timestamps
    end
    add_index :images_resources, :image_id
    add_index :images_resources, :resource_id
  end
end
