class UsersController < ApplicationController

	before_action :user_is_current_user, only: [:edit, :update]

	def current
		respond_to do |format|
			format.json {
				render json: {
					id: current_user.id,
					email: current_user.email,
					first_name: current_user.first_name,
					last_name: current_user.last_name,
					phone_number: current_user.phone_number
				}
			}
		end
	end

	def home
		@user = User.new
	end

	def main
		# @employees = Employee.all
		@my_time = Time.now
	end
	def la
	end

	def ny

	end
	def cities
		binding.pry
	end

	def miami
		@employees = Employee.all.where("city='Miami'")
		respond_to do |format|
			format.html { render text: "Please go to emplyees.json" }
			format.json { render json: @employees.to_json }
		end
	end

	def newyork
		@employees = Employee.all.where("city='New York'")
		respond_to do |format|
			format.html { render text: "Please go to emplyees.json" }
			format.json { render json: @employees.to_json }
		end
	end

	def losangeles
		@employees = Employee.all.where("city='Los Angeles'")
		respond_to do |format|
			format.html { render text: "Please go to emplyees.json" }
			format.json { render json: @employees.to_json }
		end
	end

	def employees
		@employees = Employee.all
		respond_to do |format|
			format.html { render text: "Please go to emplyees.json" }
			format.json { render json: @employees.to_json }
		end
	end
	def list
		@employees = Employee.all
	end

	def new
		@user = User.new
	end

	def create
		@user = User.new( user_params )
		if @user.save
			redirect_to users_main_url
		else
			# binding.pry
			render :new, notice: "#{@user.email} is not a valid email"
		end
	end

	def edit
		@user = current_user
	end

	def update
		@user = current_user

		if @user.authenticate(params[:user][:current_password])
			@user.update(password_params)
			# redirect_to
		else
			render :edit
		end
	end

	def checkout


	end

	private

	def user_params
		params.require(:user).permit(:email, :password, :password_confirmation, :first_name, :last_name, :phone_number)
	end

	def password_params
		params.require(:user).permit(:password, :password_confirmation)
	end

	def user_is_current_user
		user = User.find(params[:id])

		if user
			# redirect_to
		else
			# redirect_to new_session_path
		end
	end
end
