class CreateEmployees < ActiveRecord::Migration
	def change
		create_table :employees do |t|
			t.string :email, null: false
			t.string :city, null: false
			t.string :first_name, null: false
			t.string :last_name, null: false
			t.string :phone_number, null: false 
			t.string :password_digest, null: false
			t.string :session_token
			t.timestamps null: false
		end
	end
end
