class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :login_name,    :null => false               #登陆名
      t.string :name,    :null => false                     #用户姓名
      t.string :crypted_password,:null => false            #用户密码
      t.string :password_salt,:null => false               #用户注册时密码确认时使用
      t.references :dept,    :null => false                 #所属部门
      t.datetime :last_login_time                           #上次登陆时间
      t.string :last_login_ip                               #上次登陆IP
      t.string    :persistence_token,   :null => false    #使用authologic必须添加的

      t.timestamps
    end
  end
end


