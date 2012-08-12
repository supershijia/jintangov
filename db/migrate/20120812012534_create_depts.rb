class CreateDepts < ActiveRecord::Migration
  def change
    create_table :depts do |t|
      t.string :name           #部门名称
      t.string :code           #部门编号

      t.timestamps
    end
  end
end
