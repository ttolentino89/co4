class Item < ApplicationRecord
  belongs_to :user, required: false
  has_and_belongs_to_many :categories
end
