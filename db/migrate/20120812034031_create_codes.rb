class CreateCodes < ActiveRecord::Migration
  def change
    create_table :codes do |t|
      t.string :typecode      #类别编码
      t.string :typename      #类别名称
      t.string :detailcode    #明细编码
      t.string :detailname    #明细名称
      t.string :attr           #属性值

      t.timestamps
    end
  end
end
