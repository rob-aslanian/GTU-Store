class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :title
      t.string :description
      t.numeric :price
      t.belongs_to :user ,  :null => false
      t.belongs_to :category , :default => 1


      t.timestamps
    end
  end
end
