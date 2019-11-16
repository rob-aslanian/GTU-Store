class Item < ApplicationRecord
    has_and_belongs_to_many:user
    belongs_to :category
    has_many :images , dependent: :destroy, foreign_key: :item_id
    accepts_nested_attributes_for :images

end
