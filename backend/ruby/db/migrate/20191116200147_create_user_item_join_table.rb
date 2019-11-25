class CreateUserItemJoinTable < ActiveRecord::Migration[5.1]
  def change
    create_join_table :items, :users
  end
end
