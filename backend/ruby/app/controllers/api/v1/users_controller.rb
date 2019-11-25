class Api::V1::UsersController < ApplicationController
  before_action :authenticate_request, except: :create
  before_action :find_user, except: %i[create index]


  swagger_controller :users , "Users"
  # GET /users
  def index
    @users = User.select("id , avatar , first_name, last_name , email , created_at ")
    render json: @users, status: :ok
  end
  swagger_api :index do
    summary "Get All users"

    response :ok
  end

  # GET /users/{id}
  def show

    render json: @user, status: :ok 
  end
  swagger_api :show do
    summary "Get User By id"
    param :path , :id , :integer , :required , 'User id'

    response :ok
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save
      token = JsonWebToken.encode(user_id: @user.id , email:@user.email)
      url_path =  "#{request.base_url}/api/v1/auth/verify/#{token}"
      UserMailer.auth(@user ,  url_path).deliver_later!
      render json: @user, status: :created
    else
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end
  swagger_api :create do
    summary "Register user"
    param :form, "first_name", :string, :optional, "First name"
    param :form, "last_name", :string, :optional, "Last Name"
    param :form, "email", :email, :required, "Email"
    param :form, "password", :password, :required, "Password"

    response :created
    response :unprocessable_entity

  end

  # PUT /users/{id}
  def update
    if @current_user == @user
      unless @user.update(params.permit(:first_name, :last_name, :password))
        render json: { errors: @user.errors.full_messages },
              status: :unprocessable_entity
      end
      else
        render json: { data:[]  , status: :not_have_permission } , status: :forbidden
    end
  end
  swagger_api :update do
    summary "Edit user"
    param :form, "first_name", :string, :optional, "First name"
    param :form, "last_name", :string, :optional, "Last Name"
    param :form, "password", :password, :optional, "Password"

    response :ok
    response :forbidden

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
  swagger_api :destroy do
    summary "Remove user"
    param :path , :id , :integer , :required , 'User id'

    response :ok
    response :forbidden

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
