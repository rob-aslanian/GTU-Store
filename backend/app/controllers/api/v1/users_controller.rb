class Api::V1::UsersController < ApplicationController
  before_action :authenticate_request, except: :create
  before_action :find_user, except: %i[create index]


  # GET /users
  def index
    @users = User.select("id , avatar , first_name, last_name , email , created_at ")
    render json: @users, status: :ok
  end

  # GET /users/{id}
  def show
    puts user_params
    render json: @user, status: :ok
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save
      token = JsonWebToken.encode(user_id: @user.id , email:@user.email)
    #   EmailtestMailer.sample_email(@user ,  token).deliver_later!
      render json: @user, status: :created
    else
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  # PUT /users/{id}
  def update
    if @current_user == @user
      unless @user.update(user_params)
        render json: { errors: @user.errors.full_messages },
              status: :unprocessable_entity
      end
      else
        render json: { data:[]  , status: :not_have_permission } , status: :forbidden
    end
  end

  # DELETE /users/{username}
  def destroy
    if @current_user == @user
        @user.destroy
        render json: { data: @user , status: :deleted } , status: :ok
    else
      render json: { data:[]  , status: :not_have_permission } , status: :forbidden
    end
  end

  private

  def find_user
    @user = User.where(:id => params[:id]).select('id , avatar , first_name, last_name , email , created_at ')
  rescue ActiveRecord::RecordNotFound
    render json: { errors: 'User not found' }, status: :not_found
  end

  def user_params
    params.permit(:first_name, :last_name, :email, :password)
  end
end
