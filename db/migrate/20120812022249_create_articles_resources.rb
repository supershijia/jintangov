class CreateArticlesResources < ActiveRecord::Migration
  def change
    create_table :articles_resources do |t|
      t.references :article               #新闻ID
      t.references :resource              #资源ID

      t.timestamps
    end
    add_index :articles_resources, :article_id
    add_index :articles_resources, :resource_id
  end
end
