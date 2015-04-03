# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# t.string :email, null: false
# t.string :city, null: false
# t.string :first_name, null: false
# t.string :last_name, null: false
# t.string :phone_number, null: false
steve = Employee.create(email:"steve@gmail.com", city:"Miami", first_name: "Steve", last_name: "Johnson", phone_number: "1234567890", password_digest:"3v32v25v1234v2", session_token:"gfwdq345fqew")
debbie = Employee.create(email:"debbie@gmail.com", city:"Los Angeles", first_name: "Debbie", last_name: "Smith", phone_number: "2222222222", password_digest:"rwegsfv25v14h1", session_token:"trqfdsag45fqew")
john = Employee.create(email:"johnjones@gmail.com", city:"Miami", first_name: "Jonathan", last_name: "Jones", phone_number: "3333333333", password_digest:"fe11v25vgrcsv2", session_token:"abcqwe303fqew")
sarah = Employee.create(email:"sarahz@gmail.com", city:"New York", first_name: "Sarah", last_name:"Zackson", phone_number: "0987654321", password_digest:"nhl245vgrcsv2", session_token:"pol4231fq2w")


100.times do 
	Employee.create(email:Faker::Internet.email, city:Faker::Address.city, first_name:Faker::Name.first_name, last_name:Faker::Name.last_name, phone_number:Faker::PhoneNumber.cell_phone, password_digest: Faker::Internet.password, session_token: Faker::Internet.password(10, 20) )
end