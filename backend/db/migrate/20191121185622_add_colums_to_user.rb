class AddColumsToUser < ActiveRecord::Migration[5.1]
  def change
    change_table :items do |t|
      t.column :reactions, 'integer unsigned' , :default => 0
    end
  end
end
