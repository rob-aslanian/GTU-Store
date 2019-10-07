class Api::V1::UsersController < ApplicationController
    
    def index
        @users = User.all

        render json: { data: @users , status: :get_all_user } , status: response.status
    end

    def show
        @user = User.find(params[:id])
        session[:user_id] = params[:id]
        
        render json: { data: @user , status: :get_user } , status: response.status
    end

    def create
        @user = User.create(users_params)
        status = @user.valid? ? :created : :exists
        session[:user_id] = @user.id

        render json: { data: @user , status: status } , status: response.status
    end

    def update
        user_id = session[:user_id]
        update_user = ->{
            @user = User.find(params[:id])
            @user.update(users_params)

            render json: { data: @user ,  status: :updated } , status: response.status
        }

        has_permision(user_id , update_user)
    end

    def destroy
        user_id = session[:user_id]
        delete_user = ->{
            @user = User.find(params[:id])
            @user.destroy

            render json: { data: @user ,  status: :deleted } , status: response.status
        }

        has_permision(user_id , delete_user)
    end

    private 
    def has_permision(user_id , cb)
        if user_id == nil
            render json: { status: :empty_token } , status: :unauthorized
        end

        unless user_id == params[:id]
            render json: { status: :not_have_permission } , status: :forbidden
        else
            cb.call
        end
    end


    def users_params
        params.require(:user).permit(:email , :firstName , :lastName , :age)
    end
end
