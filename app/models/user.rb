class User < ActiveRecord::Base
	has_secure_password
	validates :email, :email => {:strict_mode => true}
	phony_normalize :phone_number, :default_country_code => 'US'
	validates :phone_number, :phony_plausible => true
end
