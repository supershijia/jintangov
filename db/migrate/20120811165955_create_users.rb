
class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :login_name               #登陆名
      t.string :password                 #密码
      t.string :name                     #用户姓名
      t.integer :dept_id                 #所属部门
      t.datetime :last_login_time       #上次登陆时间
      t.string :last_login_ip           #上次登陆IP

      t.timestamps
    end
  end
end


