# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ : 'Star Wars' }, { : 'Lord of the Rings' }])
#   Character.create(: 'Luke', movie: movies.first)

# Item.create!(
#   : "Toilet Paper",
#   description: "Basic American household staple.",
#   img_link: "https://images.pexels.com/photos/3962433/pexels-photo-3962433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
#   quantity: 8,
#   user: users.first,
# )

Category.create!(name:"basic/universal")
Category.create!(name:"advanced/special-use")
Category.create!(name:"household/kitchen")
Category.create!(name:"outdoor/survival")
Category.create!(name:"medical/first aid")
Category.create!(name:"educational")
Category.create!(name:"entertainment")
Category.create!(name:"food/drink")
Category.create!(name:"protective gear")
Category.create!(name:"tools/hardware")
Category.create!(name:"miscellaneous")

p "#{Category.count} categories created!"
