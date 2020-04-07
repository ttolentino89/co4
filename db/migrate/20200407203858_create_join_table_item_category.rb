class CreateJoinTableItemCategory < ActiveRecord::Migration[6.0]
  def change
    create_join_table :items, :categories do |t|
      # t.index [:item_id, :category_id]
      # t.index [:category_id, :item_id]
    end
  end
end
