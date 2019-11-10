class Api::V1::CategoryController < ApplicationController
    before_action :authenticate_request, except: :getAllCategory

    swagger_controller :category, "Get All Category"

    def getAllCategory
        @categories = Category.all

        render json: { data: @categories , stattus: :get_all_category } , stattus: :ok
    end

    swagger_api :getAllCategory do
        summary "Get All Categories "
        notes "Get All Categories"

    
        response :unauthorized
        response :invalid_credentials
      end

    
end
