# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ : 'Star Wars' }, { : 'Lord of the Rings' }])
#   Character.create(: 'Luke', movie: movies.first)

Category.destroy_all
Item.destroy_all

basic = Category.create!(name:"basic/universal")
advanced = Category.create!(name:"advanced/special-use")
home = Category.create!(name:"household/kitchen")
outdoor = Category.create!(name:"outdoor/survival")
med = Category.create!(name:"medical/first aid")
edu = Category.create!(name:"educational")
fun = Category.create!(name:"entertainment")
food = Category.create!(name:"food/drink")
wearable = Category.create!(name:"protective gear")
tool = Category.create!(name:"tools/hardware")
misc = Category.create!(name:"miscellaneous")

p "#{Category.count} categories created!"

tp = Item.create!(
  name: "Toilet Paper",
  description: "Basic bathroom staple",
  img_link: "https://images.pexels.com/photos/3962433/pexels-photo-3962433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  quantity: 8,
  categories: [basic, home])

matches = Item.create!(
  name: "Matches",
  description: "Essential firestarter, comes in packs of 12 sticks",
  img_link: "https://images.pexels.com/photos/67540/matches-matchstick-flammable-wood-67540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  quantity: 8,
  categories: [basic, home, outdoor])

mask = Item.create!(
  name: "Dispoable Mask",
  description: "Priority for this item goes to medical workers",
  img_link: "https://images.pexels.com/photos/3902881/pexels-photo-3902881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  quantity: 268,
  categories: [med, wearable])

lemonade = Item.create!(name: "Lemon Water",
  description: "All-natural, organic + vegan",
  img_link: "https://images.pexels.com/photos/3651044/pexels-photo-3651044.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  quantity: 2,
  categories: [food])

p "#{Item.count} items created!"
