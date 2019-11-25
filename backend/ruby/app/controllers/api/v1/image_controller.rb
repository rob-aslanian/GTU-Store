class Api::V1::ImageController < ApplicationController
    
    swagger_controller :image  , "Images" 

    def destroy
        
        begin
            @image = Image.find(params[:id])
            if @image.destroy
                render json: { status: :image_deleted } , status: :ok
            end
        rescue => exception
            render status: :forbidden    
        end 
  
    end

    swagger_api :destroy do
        summary "Remove image "
        notes "Remove image by id "
        param :path, :id, :integer, :required, "Image Id"

        response :unauthorized
        response :forbidden
        response :ok
    end
    

end
