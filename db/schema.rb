# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120812034031) do

  create_table "articles", :force => true do |t|
    t.string   "title"
    t.text     "body"
    t.integer  "ifTop"
    t.integer  "fuser_id"
    t.integer  "suser_id"
    t.integer  "tuser_id"
    t.integer  "source_id"
    t.integer  "user_id"
    t.integer  "auditer_id"
    t.datetime "audittime"
    t.integer  "counter"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "articles_resources", :force => true do |t|
    t.integer  "article_id"
    t.integer  "resource_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "articles_resources", ["article_id"], :name => "index_articles_resources_on_article_id"
  add_index "articles_resources", ["resource_id"], :name => "index_articles_resources_on_resource_id"

  create_table "codes", :force => true do |t|
    t.string   "typecode"
    t.string   "typename"
    t.string   "detailcode"
    t.string   "detailname"
    t.string   "attr"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "depts", :force => true do |t|
    t.string   "name"
    t.string   "code"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "files", :force => true do |t|
    t.string   "name"
    t.text     "note"
    t.string   "file_path"
    t.string   "category_id"
    t.integer  "user_id"
    t.integer  "fuser_id"
    t.integer  "suser"
    t.integer  "tuser_id"
    t.integer  "source_id"
    t.integer  "auditer_id"
    t.datetime "audittime"
    t.integer  "counter"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "images", :force => true do |t|
    t.string   "name"
    t.text     "note"
    t.string   "img_path"
    t.string   "url"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "images_resources", :force => true do |t|
    t.integer  "image_id"
    t.integer  "resource_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "images_resources", ["image_id"], :name => "index_images_resources_on_image_id"
  add_index "images_resources", ["resource_id"], :name => "index_images_resources_on_resource_id"

  create_table "links", :force => true do |t|
    t.string   "name"
    t.string   "img_path"
    t.string   "url"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "permissions", :force => true do |t|
    t.integer  "resource_id"
    t.string   "authority"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "resources", :force => true do |t|
    t.string   "name"
    t.string   "code"
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "roles", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "roles_permissions", :id => false, :force => true do |t|
    t.integer  "role_id"
    t.integer  "permission_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "roles_permissions", ["permission_id"], :name => "index_roles_permissions_on_permission_id"
  add_index "roles_permissions", ["role_id"], :name => "index_roles_permissions_on_role_id"

  create_table "users", :force => true do |t|
    t.string   "login_name",        :default => "", :null => false
    t.string   "name",              :default => "", :null => false
    t.string   "crypted_password",  :default => "", :null => false
    t.string   "password_salt",     :default => "", :null => false
    t.integer  "dept_id",                           :null => false
    t.datetime "last_login_time"
    t.string   "last_login_ip"
    t.string   "persistence_token", :default => "", :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users_roles", :id => false, :force => true do |t|
    t.integer  "user_id"
    t.integer  "role_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users_roles", ["role_id"], :name => "index_users_roles_on_role_id"
  add_index "users_roles", ["user_id"], :name => "index_users_roles_on_user_id"

  create_table "videos", :force => true do |t|
    t.string   "name"
    t.text     "note"
    t.string   "video_path"
    t.string   "category_id"
    t.integer  "user_id"
    t.integer  "counter"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
