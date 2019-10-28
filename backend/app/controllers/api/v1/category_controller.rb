class Api::V1::CategoryController < ApplicationController
    before_action :authenticate_request, except: :getAllCategory

    def getAllCategory
        @categories = Category.all

        render json: { data: @categories , stattus: :get_all_category } , stattus: :ok
    end
end
