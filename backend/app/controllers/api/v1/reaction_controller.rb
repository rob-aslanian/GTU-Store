class Api::V1::ReactionController < ApplicationController

    swagger_controller :reaction, "Reaction (Aka liked Items)"

    def index
        @test = @current_user.item
        render json: { data:  @test } , status: :ok
    end

    swagger_api :index do
        summary "Get All liked categories "

        response :unauthorized
        response :invalid_credentials
    end


    def add_reaction 
        begin
            @item = Item.find(params[:item_id])
            @item.increment!(:reactions)
            @current_user.item  << @item 
            render status: :ok
        rescue => exception
            render json:{ error: exception } ,  status: :forbidden
        end
    end

    swagger_api :add_reaction do
        summary "Like Reaction"
        param :form, "item_id", :integer, :required, "Item id"

        response :unauthorized
        response :forbidden
    end

    def remove_reaction 
        begin
            @item = Item.find(params[:id])
            @current_user.item.delete(@item)
            
            if  @item.reactions > 0
                @item.decrement!(:reactions)
            end
            render status: :ok
        rescue => exception    
            render json:{ error: exception } ,  status: :forbidden
        end
    end

    swagger_api :remove_reaction do
        summary "Remove Reaction"
        param :path, "id", :integer, :required, "Item id"

        response :unauthorized
        response :forbidden
    end
    
end
