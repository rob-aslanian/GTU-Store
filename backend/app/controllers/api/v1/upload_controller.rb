class Api::V1::UploadController < ApplicationController
     before_action :set_avatar

    swagger_controller :upload , "Upload user avatar"
    def add_avatar
        if @current_user == @user
            add_more_images(images_params[:avatar])
            flash[:error] = "Failed uploading images" unless @user.save

            render json: { data:[]  , status: :image_uploaded} , status: :ok
        else
            render json: { data:[] , status: :not_have_permission }, status: :forbidden
        end
    end

    swagger_api :add_avatar do
        summary "Add avatar to user"
        param :form, :avatar, :file, :required, "Avatar "
        
        response :ok
        response :forbidden
        response :not_have_permission
    end

    def remove_avatar
        if @current_user == @user
            remove_image
            flash[:error] = "Failed deleting image" unless @user.save

            render json: { data:[]  , status: :image_deleted} , status: :ok
        else
            render json: { data:[] , status: :not_have_permission }, status: :forbidden
        end
    end

    swagger_api :remove_avatar do
        summary "Remove user Avatar" 
        
        response :ok
        response :forbidden
        response :not_have_permission
    end

    private

    def set_avatar
        @user = User.find(@current_user.id)
    rescue ActiveRecord::RecordNotFound
        render json: { errors: 'User not found' }, status: :not_found
    end

    def add_more_images(new_images)
        avatar = @user.avatar 
        avatar = new_images
        @user.avatar = avatar
    end

    def remove_image
        @user.avatar = '' 
    end

    def images_params
        params.permit(:avatar) # allow nested params as array
    end
end
